'use client';

import { ConversationProvider } from '@elevenlabs/react';

export default function ConversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ConversationProvider>{children}</ConversationProvider>;
}
