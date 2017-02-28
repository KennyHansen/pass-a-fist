let injuries = [
    {
        name: "A fake injury",
        damage: 1
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