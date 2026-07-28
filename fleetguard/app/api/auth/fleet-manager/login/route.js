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



if(data.status==="PENDING"){

return Response.json({

message:"Waiting for admin approval"

},
{
status:403
});

}



if(data.status==="REJECTED"){

return Response.json({

message:"Rejected"

},
{
status:403
});

}



return Response.json({

message:"Login allowed",

user:data

});


}