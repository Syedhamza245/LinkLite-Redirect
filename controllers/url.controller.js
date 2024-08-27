const shortID = require('shortid')
const URL =require('../models/url.models')

async function handleGenerateShortUrl(req,res) {
    const {userRedURL} =  req.body
    if(!userRedURL)  return res.status(400).json({ msg : "Redirect URL is required"})
    const shortid = shortID(8)
    await URL.create({
        shortURL: shortid,
        redirectURL: userRedURL,
        visitHistory: []
    })
    return res.json({ id: shortid})
}


async function handleAnalytics(req,res) {
    const id = req.params.id
    const result = await URL.findOne({shortURL:id})
    res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory}) 
    
}

module.exports= {
    handleGenerateShortUrl,
    handleAnalytics
}