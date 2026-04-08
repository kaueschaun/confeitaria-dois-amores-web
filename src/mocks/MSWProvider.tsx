'use client';

import { useEffect, useState, type ReactNode } from 'react';

export default function MSWProvider({ children }: { children: ReactNode }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            import('./browser').then(({ worker }) => {
                worker.start({
                    onUnhandledRequest: 'bypass',
                }).then(() => {
                    setReady(true);
                });
            });
        } else {
            setReady(true);
        }
    }, []);

    if (!ready) return null;

    return <>{children}</>;
}
