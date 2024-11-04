"use strict";

const users = {
    id : ["leisure1566", "최준혁"],
    psword : ["1997", "050206"]
}


const output = {

home : (req, res) =>{
    res.render("home/index");},

login : (req, res) =>{
    res.render("home/login");}
}

const process = {
    login : (req, res) =>{
        const id = req.body.id
        const psword = req.body.psword

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    sucsess : true
                })
            }
        }
        return res.json({
            sucsess : false,
            msg : "로그인 실패"
        })
    }
}

module.exports = {
    output,
    process
};
