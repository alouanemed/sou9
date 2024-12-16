import React from "react";

// Standard Loader
export function Loader() {
  return (
    <div className="flex h-32 w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-primary border-t-4 border-secondary"></div>
    </div>
  );
}

// Small Loader
export function LoaderSmall() {
  return (
    <div className="flex h-16 w-full items-center justify-center">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-primary border-secondary"></div>
    </div>
  );
}

// Full-page Loader with Backdrop
export function LoaderFullPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-primary border-secondary"></div>
    </div>
  );
}
