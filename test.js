function size_byte(text){
	var ram = text;
	if(!text) throw Error("Required is a input number");
	if(isNaN(text)) throw Error("Is not a input string/object");
    if(ram <= "1023"){
        var b = `${text}байт`;
    }else if(ram <= "1023948"){
        if(ram <= "102393"){
            var kb = `${(text / 1024).toFixed(2)}кб`;
        }else{
            var kb1 = `${(text / 1024).toFixed(1)}кб`;
        }
    }else if(ram <= "1048565760"){
        if(ram <= "104847360"){
            var mb = `${(text / 1024 / 1024).toFixed(2)}мб`;
        }else{
            var mb1 = `${(text / 1024 / 1024).toFixed(1)}мб`;
        }
    }else if(ram <= "1073727979520"){
        if(ram <= "1073727979520"){
            var gb = `${(text / 1024 / 1024 / 1024).toFixed(2)}гб`;
        }else{
            var gb1 = `${(text / 1024 / 1024 / 1024).toFixed(1)}гб`;
        }
    }else if(ram <= "1099465239121920"){
        if(ram <= "109947597619200"){
            var tb = `${(text / 1024 / 1024 / 1024 / 1024).toFixed(2)}тб`;
        }else{
            var tb1 = `${(text / 1024 / 1024 / 1024 / 1024).toFixed(1)}тб`;
        }
    }else if(ram <= "1125890113450967000"){
        if(ram <= "112584063703203840"){
            var pt = `${(text / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)}пт`;
        }else{
            var pt1 = `${(text / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(1)}пт`;
        }
    }else if(ram <= "1125884616071086100"){
        if(ram <= "112584063703203840"){
            var eb = `${(text / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2)}эб`;
        }else{
            var eb1 = `${(text / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(1)}эб`;
        }
    }else if(ram <= "991508710722078000000"){
        var zb = `${(text / 1024 / 1024 / 1024 / 2024 / 1024 / 1024 / 1024).toFixed(2)}зб`;
    }else{
        var stop = `Error bytes: ${text}`;
    }
    return b || kb || kb1
             || mb || mb1
             || gb || gb1
             || tb || tb1
             || pt || pt1
             || eb || eb1
             || zb || stop;
}

require("diskusage").check('/',function(err,info){console.log(`Память Replit:${size_byte(info.total)}\nСвободно:${size_byte(info.free)}`)});