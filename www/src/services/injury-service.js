let injurys = [
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
    getSomeFakeInjurys() {
        return injurys
    },
    addFakeInjury(injuryName) {
        injurys.push({ name: injuryName, damage: 1})
        console.log('New injury added')
    }
}

export default injuryService;