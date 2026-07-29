import { supabase } from "@/lib/supabase";


export async function PATCH(req){

const {
email
}=await req.json();


await supabase
.from("users")
.update({

status:"APPROVED"

})
.eq(
"email",
email
);


return Response.json({

message:"Fleet Manager approved"

});

}