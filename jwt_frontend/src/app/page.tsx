import styles from "./page.module.css";
import { isUserLoggedIn } from "@/JWT/jwtService";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {

  // TODO move this to middleware 
  if (await isUserLoggedIn()) {
    redirect("/profile")
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <nav>
          <Link href="/login">Login</Link>
        </nav>
        <nav>
          <Link href="/register">Register</Link>
        </nav>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
