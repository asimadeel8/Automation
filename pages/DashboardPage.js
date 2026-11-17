class DashboardPage {
    constructor (page) {
        this.page = page;

        this.dashboardHeading = page.getByRole('heading', {
            name : "Good morning, Dr. Khan",
            exact : true
        });

        this.myCoursesLink = page.getByRole('link', {
            name : "My courses",
            exact : true
        });
    }

    async clickMyCourses() {
        await this.myCoursesLink.click();
    }
}

module.exports = { DashboardPage };