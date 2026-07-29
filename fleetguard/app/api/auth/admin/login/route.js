import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";


export async function POST(req){

const {
email,
password
}=await req.json();


if(email !== process.env.ADMIN_EMAIL){

return Response.json(
{
message:"Unauthorized"
},
{
status:401
}
);

}


try{

const user =
await signInWithEmailAndPassword(
auth,
email,
password
);


return Response.json({

message:"Admin login successful",

uid:user.user.uid

});


}

catch(error){

return Response.json(
{
message:error.message
},
{
status:400
}
);

}

}