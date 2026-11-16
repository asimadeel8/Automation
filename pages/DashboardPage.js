class DashboardPage {
    constructor (page) {
        this.page = page;

        this.dashboardHeading = page.getbyRole('heading', {
            name : "Good morning, Dr. Khan",
            exact : true
        });

        this.myCoursesLink = page.getByRole('link', {
            name : "My Courses",
            exact : true
        });
    }

    async clickMyCourses() {
        await this.myCoursesLink.click();
    }
}

module.exports = { DashboardPage };