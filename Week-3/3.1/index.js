// zod understanding
const zod = require("zod");


function validate (obj){
    const schemaTwo = zod.object({
        email: zod.string().email(),
        password : zod.string().min(8),
        password : zod.literal("IN").or (zod.literal("US")),
      })

      const response = schemaTwo.safeParse(obj)
      console.log(response);
}


validate(["abc", "zxc", 1])


// zod schema for email input verification

/* const schemaTwo = zod.object({
    email: zod.string().email(),
    password : zod.string().min(8),
    password : zod.literal("IN").or (zod.literal("US")),
  }) */