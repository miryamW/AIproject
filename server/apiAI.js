const {OpenAI}=require('openai')
require('dotenv').config()
const openai = new OpenAI({ apiKey: process.env.apiKey });
const express= require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

const getComponent = async(inputText) => {
  const completion = await openai.chat.completions.create({
    messages: [
        {"role": "system", "content": "You are a tsx react component developer."},
        {"role": "user", "content": `give me a json list that willcontain list of component name and their props, than the client side will know how to build a perfect component with all the content: due to the input ${inputText}
        you can use this list  of components:
        RMGButton that accept props ({ title, onClick, className }),
        RMGImage that accept props ({ src, alt, className }),
        RMGHeader that accept props ({ text, level(string type), className }),
        RMGInput that accept props ({ type, placeholder, value, onChange, className }),
        RMGText that accept props ({ text, className })
`,
    },
        {"role": "user", "content": "create me a login component"},
        {"role": "assistant", "content": "[{'name':'RMGHeader','props':[ 'text':'Login' ,'level':'1' ,'className':'login-header']},.....]"},
    ],
    model: "gpt-3.5-turbo",
    // max_tokens:50,
    temperature:1,
  });
  
//  return completion.choices[0];
const response=completion.choices[0].message.content.trim();
console.log(response);
return response

//   question = response['choices'][0]['message']['content'].strip()
//   return question
}

// input_text = "give me login component"
// question = main(input_text)
// console.log(question);

router.post('/getComponent',async (req,res)=>{
    const {input} = req.body
    console.log(input);
    res.send(await getComponent(input))
})

module.exports=router;


// {
//     "componentName": "Login",
//     "children": [
//     {
//     "componentName": "RMGHeader",
//     "props": {
//     "text": "Login",
//     "level": "1",
//     "className": "login-header"
//     }
//     },
//     {
//     "componentName": "RMGInput",
//     "props": {
//     "type": "text",
//     "placeholder": "Username",
//     "value": "",
//     "onChange": "handleUsernameChange",
//     "className": "input-field"
//     }
//     },
//     {
//     "componentName": "RMGInput",
//     "props": {
//     "type": "password",
//     "placeholder": "Password",
//     "value": "",
//     "onChange": "handlePasswordChange",
//     "className": "input-field"
//     }
//     },
//     {
//     "componentName": "RMGButton",
//     "props": {
//     "title": "Login",
//     "onClick": "handleLogin",
//     "className": "login-button"
//     }
//     }
//     ]
//     }