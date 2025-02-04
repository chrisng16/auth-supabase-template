<h1 align="center">Next.js x Supabase Auth Template</h1>

<p align="center">
Open-source template for building modern web applications with Next.js and Supabase authentication.
</p>
<br/>
<p align="center">
  <a href="#features"><strong>Features</strong></a> |
  <a href="#demo"><strong>Demo</strong></a> |
  <a href="#clone-and-make-it-your-own"><strong>Clone and make it your own</strong></a> |
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a> |
    <a href="#credits"><strong>Credits</strong></a>

</p>

## Features
- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
- Supabase Auth
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Components with [shadcn/ui](https://ui.shadcn.com/)



## Demo
You can view a fully working demo at [chrisng16-nextjs-supabase-template.vercel.app](https://chrisng16-nextjs-supabase-template.vercel.app/).



## Clone and make it your own
### <u>Attention</u>
Step 1 & 2 can be skipped if you DO NOT plan to use `Login with Google` function
### Step 1. Setup Supabase

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Go to newly created [project settings](https://supabase.com/dashboard/project/_/settings/api) and save the following information for future steps:
    
    - Project URL > URL
    - Project API Keys > anon

3. Go to [Authentication Configuration > Providers](https://supabase.com/dashboard/project/_/auth/providers)

    - Expand `Google` and enable `Sign in with Google`
    - Enable `Skip nonce checks` if needed (optional)
    - Save *Callback URL (for OAuth)* for future usage
    - Leave `Client IDs` and `Client Secret (for OAuth)` empty for now


### Step 2. Setup Google Auth Platform (for Login with Google function)

1. Go to [Google Auth Platform](https://console.cloud.google.com/auth/)

2. Creat a new project and open it

3. Go through the getting started flow and click `Create OAuth Client`
    - Choose your application type: *Web application* and your app name
    - Under *Authorized JavaScript origins*:
        - Add `http://localhost:[insert-the-port-your-app-running-on]` for local development
        - Add any additional url that you may host the app on
    - Under *Authorized redirect URIs*:
        - Add ***Callback URL (for OAuth)*** that you previously obtained at Supabase
    - Click <i>Create</i> to complete the getting started flow
    - Once the OAuth Client is created, click on it and obtain the `Client ID` and  `Client secret`

4. Go back to [Supabase Authentication Configuration > Providers](https://supabase.com/dashboard/project/_/auth/providers)
    - Expand `Google`
    - Fill in the `Client IDs` and `Client Secret (for OAuth)` fields with the `Client ID` and  `Client secret` that you just obtain from [Google Auth Platform](https://console.cloud.google.com/auth/)
    - Save the change


### Step 3. Setup Template on Your Local PC

1. Clone the template from GitHub
  
    ```bash
    git clone https://github.com/chrisng16/auth-supabase-template.git
    ```

2. Go to the template's directory using `cd`
  
    ```bash
    cd auth-supabase-template
    ```

3. Install dependencies
  
    ```bash
    npm install
    ```

    ```bash
    yarn install
    ```

    ```bash
    pnpm install
    ```

4. Rename `.env.example` to `.env.local` and update the following:

    ```
    NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
    NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
    ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)
   
5. Run the app and enjoy
    
    ```bash
    npm run dev
    ```

6. This template comes with the default shadcn/ui style initialized. If you instead want other ui.shadcn styles, delete `components.json` and [re-install shadcn/ui](https://ui.shadcn.com/docs/installation/next)


## Feedback and issues
Please file feedback and issues over on [my GitHub page](https://github.com/chrisng16/auth-supabase-template/issues/new/choose).


## Credits
This project is based on [Supabase Starter Template on Vercel](https://vercel.com/templates/next.js/supabase), with UI enhancements and an added Google login flow. It streamlines the app development providing a better DX. Credits to the original creators for providing a solid foundation.