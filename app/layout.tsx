'use client';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider enableSystem={true} attribute="class">
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
