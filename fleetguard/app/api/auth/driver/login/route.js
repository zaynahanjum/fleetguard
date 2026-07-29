import { supabase } from "@/lib/supabase";


export async function POST(req){


const {
email
}=await req.json();



const {data}=await supabase
.from("users")
.select("*")
.eq("email",email)
.single();



if(!data){

return Response.json({

message:"User not found"

},
{
status:404
});

}



return Response.json({

message:"Login successful",

user:data

});


}