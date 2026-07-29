// app/api/test-token/route.js

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const token = await userCredential.user.getIdToken();

    return Response.json({
      token,
      uid: userCredential.user.uid,
    });
  } catch (err) {
    return Response.json(
      { message: err.message },
      { status: 400 }
    );
  }
}