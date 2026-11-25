"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";
import { BRAND_NAME } from "@/app/components/brand";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type AuthLayoutProps = {
  mode: "signin" | "signup";
};

const SignIn = ({ mode }: AuthLayoutProps) => {
  const isSignUp = mode === "signup";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (isSignUp && password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (isSignUp && !acceptedTerms) {
      setError("Please accept the terms to continue.");
      return;
    }

    // Frontend demonstration only.
    // Connect your authentication API here later.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT IMAGE SECTION */}
        <section className="hidden lg:block relative min-h-[260px] overflow-hidden sm:min-h-[320px] md:min-h-[380px] lg:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=90"
            alt="Luxury hotel exterior surrounded by beautiful scenery"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#211912]/85 via-[#211912]/15 to-[#211912]/20" />

          {/* Brand */}
          <Link
            href="/"
            className="absolute left-5 top-5 z-10 flex items-center gap-2 text-white sm:left-8 sm:top-8 lg:left-10 lg:top-9"
          >
            <span className="text-2xl text-[#d6a16f]">✦</span>

            <span
              className={`${cormorant.className} text-2xl font-semibold tracking-wide sm:text-3xl`}
            >
              {BRAND_NAME}
            </span>
          </Link>

          {/* Editorial Content */}
          <div className="absolute bottom-6 left-5 right-5 z-10 text-white sm:bottom-10 sm:left-8 sm:right-8 md:bottom-12 lg:bottom-16 lg:left-14 lg:right-14">
            <h1
              className={`${cormorant.className} max-w-xl text-3xl font-medium leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
            >
              {isSignUp
                ? "Begin your journey to extraordinary stays."
                : "Every beautiful stay begins with you."}
            </h1>
          </div>
        </section>

        {/* RIGHT FORM SECTION */}
        <section className="relative flex min-h-[600px] items-center justify-center px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:min-h-screen lg:px-10 lg:py-16 xl:px-20">
          {/* Back to Home */}
          <div className="absolute left-5 top-5 sm:left-8 sm:top-8 lg:left-10 lg:top-9">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 p-2 lg:px-4 lg:py-2.5 text-sm font-medium text-[var(--foreground)]/70 shadow-sm transition-all duration-300 hover:border-[var(--primary)]/40 hover:bg-[var(--surface)] hover:text-[var(--primary)]"
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span className="hidden lg:block">Back to home</span>
            </Link>
          </div>

          <div className="w-full max-w-[440px] mt-10">
            {/* Form Heading */}
            <div className="mb-7 sm:mb-8">
              <h2
                className={`${cormorant.className} text-4xl font-medium leading-none sm:text-5xl lg:text-6xl`}
              >
                {isSignUp ? "Join us." : "Sign in."}
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--foreground)]/55">
                {isSignUp
                  ? "Create an account and make every stay a little more special."
                  : "Welcome back. Sign in to continue your journey with us."}
              </p>
            </div>

            {/* Success State */}
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-[var(--primary)]/25 bg-[var(--surface)] p-6 text-center sm:p-7"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10">
                  <CheckCircle2 size={27} className="text-[var(--primary)]" />
                </div>

                <h3
                  className={`${cormorant.className} mt-5 text-3xl font-semibold`}
                >
                  {isSignUp ? "You're all set!" : "Welcome back!"}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--foreground)]/60">
                  {isSignUp
                    ? "Your registration form has been completed successfully."
                    : "Your sign-in form has been submitted successfully."}
                </p>

                <p className="mt-3 text-[10px] leading-5 text-[var(--foreground)]/45">
                  This is a frontend demonstration. No account has been created
                  or authenticated yet.
                </p>

                <Link
                  href="/"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3.5 text-sm font-medium text-white transition hover:brightness-90"
                >
                  Explore stays
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            ) : (
              /* Authentication Form */
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Full Name */}
                {isSignUp && (
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-xs font-semibold tracking-wide"
                    >
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm outline-none transition placeholder:text-[var(--foreground)]/35 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 sm:h-[52px]"
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold tracking-wide"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 text-sm outline-none transition placeholder:text-[var(--foreground)]/35 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 sm:h-[52px]"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-xs font-semibold tracking-wide"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete={
                        isSignUp ? "new-password" : "current-password"
                      }
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 pr-12 text-sm outline-none transition placeholder:text-[var(--foreground)]/35 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 sm:h-[52px]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground)]/45 transition hover:text-[var(--primary)]"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                {isSignUp && (
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-xs font-semibold tracking-wide"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        minLength={8}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter your password"
                        className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 pr-12 text-sm outline-none transition placeholder:text-[var(--foreground)]/35 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 sm:h-[52px]"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--foreground)]/45 transition hover:text-[var(--primary)]"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Remember Me / Terms */}
                {isSignUp ? (
                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-[var(--foreground)]/60">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0 accent-[var(--primary)]"
                    />
                    <span>I agree to the terms and privacy policy.</span>
                  </label>
                ) : (
                  <div className="flex items-center justify-between gap-3">
                    <label className="flex cursor-pointer items-center gap-2 text-xs text-[var(--foreground)]/60">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 accent-[var(--primary)]"
                      />
                      Remember me
                    </label>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <p
                    role="alert"
                    className="rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2.5 text-xs text-red-600"
                  >
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[var(--primary)] text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/15 transition duration-300 hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 sm:h-14"
                >
                  {isSignUp ? "Create Account" : "Sign In"}

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </form>
            )}

            {/* Switch Authentication */}
            {!submitted && (
              <div className="mt-7 border-t border-[var(--border)] pt-5 text-center sm:mt-8 sm:pt-6">
                <p className="text-xs text-[var(--foreground)]/55">
                  {isSignUp
                    ? "Already have an account?"
                    : "Don't have an account?"}

                  <Link
                    href={isSignUp ? "/sign-in" : "/sign-up"}
                    className="ml-1.5 font-semibold text-[var(--primary)] transition hover:underline"
                  >
                    {isSignUp ? "Sign In" : "Create Account"}
                  </Link>
                </p>
              </div>
            )}

            {/* Footer */}
            <p className="mt-7 text-center text-[9px] tracking-wide text-[var(--foreground)]/35 sm:mt-10">
              © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
