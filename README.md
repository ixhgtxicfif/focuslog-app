# Focus Log — mobile PWA

Static client page for the Focus Log app (15-minute attention journal + task planner).
All data lives in the owner's own Supabase backend and is protected by a secret sync key;
this page is only the client. Hosted on GitHub Pages because Supabase does not serve HTML.

Source of truth: the `HTML` constant in the focuslog edge function — regenerate these files from it.
