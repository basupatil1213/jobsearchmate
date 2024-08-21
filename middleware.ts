import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
    "/",
    "/signin",
    "/signup",
])

const isPublicApiRoute = createRouteMatcher([
    "/api/",
    "/api/auth/(.*)",
])

export default clerkMiddleware((auth, req) => {
    const { userId } = auth();
    const currentUrl = new URL(req.url);

    // check if the current url is the home page
    const isHomePage = currentUrl.pathname === "/";

    // check if the current url is an api request
    const isApiReq = currentUrl.pathname.startsWith("/api");

    // logged in and trying to access a public route
    if (userId && isPublicRoute(req) && !isHomePage) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    // not logged in and trying to access a protected route
    if (!userId) {
        // redirect to signin page if not already there and not trying to access an api route or public route
        if (!isPublicRoute(req) && !isPublicApiRoute(req)) return NextResponse.redirect(new URL("/signin", req.url));

        // redirect to signin page if not already there and trying to access an api route that is not public
        if(isApiReq && !isPublicApiRoute(req)) return NextResponse.redirect(new URL("/signin", req.url));
    }



});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};