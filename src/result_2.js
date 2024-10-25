const axios = require('axios');
const cheerio = require('cheerio');

const getResult_2 = async () => {
    const url = "https://ssk.jkt48.com/2024/id/2nd-pre-result";
    
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
            }
        });
        
        const $ = cheerio.load(response.data);
        const data = [];
        
        const lastdata = $('section.font-poppins .mx-auto.mt-10').text().trim().split(", ");
        
        if (lastdata.length == 1) {
            data.push({
                periode: 2,
                date: null,
                time: null
            });
        } else {
            const date = lastdata[0].split("tanggal ")[1];
            const time = lastdata[1].split("pukul ")[1];
            
            data.push({
                periode: 2,  
                date: date,
                time: time
            });
        }
        
        $('.flex.w-full.items-center.gap-5').each((i, element) => {
            const number = $(element).find('.font-poppins').text().trim();
            const name = $(element).find('.hidden.text-2xl.font-bold.md\\:block').text().trim();
            const vote = $(element).find('.block.rounded-full.bg-red-600').text().trim();
            const image = $(element).find('img').attr('src');
            
            data.push({
                rank: number,
                name: name,
                votes: vote,
                image: `https://ssk.jkt48.com${image}`
            });
        });
        
        return data
    } catch (error) {
        console.log("Error fetching data for Result 2");
    }
};


module.exports = { getResult_2 }