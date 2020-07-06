const Category = require('../models/Category');
const Ads = require('../models/Ads');
const { put } = require('../../routes');

module.exports = { 
    create(req, res) {
        // trazendo as categorias para o select
        Category.all().then((results) => {
            const categories = results.rows;
            return res.render('products/create', { categories });
        }).catch((err) => {
            throw new Error(err);
        })
    },

    async post(req, res) {
        // lógica de salvar o anúncio 
        const keys = Object.keys(req.body);

        for (key in keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        // console.log(req.body)

        let results = await Ads.create(req.body);
        const adsId = results.rows[0].id;

        return res.redirect(`ads/${adsId}`)
    },
    async edit(req, res) {
        let results = await Ads.find(req.params.id);
        const ad = results.rows[0];

        if(!ad) return res.send('Ads not found');

        results = await Category.all();
        const categories = results.rows;

        return res.render('products/edit', { ad, categories })
    },
    async put(req, res) {
        const keys = Object.keys(req.body);

        for (key in keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        await Ads.update(req.body);

        return res.redirect(`/ads/${req.body.id}/edit`);
    },
    async delete(req, res) {
        await Ads.delete(req.body.id);

        return res.redirect('/ads/create');
    }
}