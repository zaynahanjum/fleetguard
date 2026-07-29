import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { supabase } from "@/lib/supabase";


export async function POST(req){


const {
name,
email,
password,
phone
}=await req.json();



try{


await createUserWithEmailAndPassword(
auth,
email,
password
);



await supabase
.from("users")
.insert({

full_name:name,

email,

phone,

role:"DRIVER",

status:"APPROVED"

});



return Response.json({

message:"Driver registered"

});


}

catch(error){

return Response.json({

message:error.message

},
{
status:400
});

}

}