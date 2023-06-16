import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import * as React from 'react';

const unauthedPaths = new Set([
	'/login',
	'/register',
	'/forgot_password',
	'/',
	'/validate',
]);

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const session = useSession();

	const router = useRouter();

	const pathname = router.pathname;

	const noCheck = unauthedPaths.has(pathname);

	React.useEffect(() => {
		if (noCheck) {
			return;
		}

		if (session.status === 'unauthenticated') {
			router.push(`/login`);
		}
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		return () => {};
	}, [noCheck, router, session.status]);

	return <>{children}</>;
};

export default AuthWrapper;
