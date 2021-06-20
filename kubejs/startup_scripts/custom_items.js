const ores = [
    'Allthemodium',
    'Vibranium',
    'Unobtainium',
    'Aluminum',
    'Copper',
    'Lead',
    'Nickel',
    'Osmium',
    'Platinum',
    'Silver',
    'Tin',
    'Uranium',
    'Zinc'
]

onEvent('item.registry', e => {
    e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').unstackable()
    e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').unstackable()
    e.create('rotten_leather').displayName('Rotten Leather')
    e.create('uu_matter').displayName('§dUU-Matter')
    e.create('patrick_star').displayName('§dPatrick Star')
    e.create('saltpeter_ingot').displayName('Nitrate Ingot')
    e.create('potassium_nitrate_dust').displayName('Potassium Nitrate Dust')
    e.create('potassium_nitrate_ingot').displayName('Potassium Nitrate Ingot')
    e.create('potassium_dust').displayName('Potassium Dust')
    e.create('potassium_ingot').displayName('Potassium Ingot')
})

onEvent('block.registry', e => {
    e.create('magical_soil').displayName('§bMagical Soil').material('organic').hardness(0.6)
    e.create('nether_star_block').displayName('§eNether Star Block').material('iron').hardness(2).lightLevel(1)
    e.create('saltpeter_block').displayName('Nitrate Block').material('iron')
    e.create('potassium_block').displayName('Potassium Block').material('iron')
    e.create('potassium_nitrate_block').displayName('Potassium Nitrate Block').material('iron')
    e.create('atm_star_block').displayName('§eATM Star Block').material('iron').hardness(5).lightLevel(1)
})
