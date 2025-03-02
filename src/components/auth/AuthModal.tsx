import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";

interface AuthModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultTab?: "login" | "signup";
}

const AuthModal = ({
  isOpen = true,
  onClose = () => {},
  defaultTab = "login",
}: AuthModalProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"login" | "signup">(defaultTab);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate authentication with Supabase
      // In a real implementation, you would use:
      // const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      console.log("Logging in with", { email, password });

      // Simulate successful login
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 1000);
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate registration with Supabase
      // In a real implementation, you would use:
      // const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });
      console.log("Signing up with", { email, password, name });

      // Simulate successful signup
      setTimeout(() => {
        setLoading(false);
        onClose();
      }, 1000);
    } catch (err) {
      setError("Failed to create account. Please try again.");
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    // In a real implementation, you would use:
    // supabase.auth.signInWithOAuth({ provider: provider as Provider });
    console.log(`Logging in with ${provider}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md dark:bg-slate-800 bg-white dark:text-white text-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {activeTab === "login" ? t("welcome_back") : t("create_account")}
          </DialogTitle>
          <DialogDescription className="text-center">
            {activeTab === "login"
              ? t("enter_credentials")
              : t("sign_up_start")}
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue={defaultTab}
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "login" | "signup")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">{t("login")}</TabsTrigger>
            <TabsTrigger value="signup">{t("signup")}</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              {error && (
                <p className="text-sm font-medium text-destructive">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full dark:bg-black dark:hover:bg-black/90 dark:text-white"
                disabled={loading}
              >
                {loading ? t("logging_in") : t("login")}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              {error && (
                <p className="text-sm font-medium text-destructive">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full dark:bg-black dark:hover:bg-black/90 dark:text-white"
                disabled={loading}
              >
                {loading ? t("creating_account") : t("signup")}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="relative my-4">
          <Separator />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="dark:bg-slate-800 bg-white px-2 text-xs text-muted-foreground">
              {t("or_continue")}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="w-full dark:bg-black dark:text-white dark:border-gray-600"
          >
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=google"
              alt="Google"
              className="mr-2 h-4 w-4"
            />
            {t("google")}
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={() => handleSocialLogin("github")}
            className="w-full dark:bg-black dark:text-white dark:border-gray-600"
          >
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=github"
              alt="GitHub"
              className="mr-2 h-4 w-4"
            />
            {t("github")}
          </Button>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-0 mt-6">
          <Button
            variant="link"
            size="sm"
            className="text-xs text-muted-foreground"
            onClick={() => console.log("Forgot password")}
          >
            {t("forgot_password")}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="ghost" size="sm" className="text-xs">
              {t("cancel")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
