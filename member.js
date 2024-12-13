function skillsMember() {
    return {
        name: 'Member',
        skills: ['Coding', 'Testing', 'Design'],
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(this.name + ' knows ' + skill);
            }.bind(this));
        }
    };
}