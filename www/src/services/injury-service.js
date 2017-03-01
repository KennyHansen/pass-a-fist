import { injuryIcons } from '../assets/cards/injury-cards/icons-injury.js'

let injuries = [
    {
        name: "Dain Bramage",
        damage: 1,
        imgUrl: injuryIcons.dainBramage
    },
    {
        name: "Another fake injury",
        damage: 1
    },
    {
        name: "A third fake injury",
        damage: 1
    }
]

let injuryService = {
    getSomeFakeInjuries() {
        return injuries
    },
    addFakeInjury(injuryName) {
        injuries.push({ name: injuryName, damage: 1})
        console.log('New injury added')
    }
}

export default injuryService;