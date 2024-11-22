import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-blue-800 text-white py-6 mt-12 ">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/terms">Terms of Service</Link> | <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    );
  }
  