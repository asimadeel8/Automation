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

        this.coursesHeading = page.getByRole('heading', {
            name : "My courses",
            exact : true
        });

        this.courseDescription = page.getByText(
            "Courses assigned to you this semester.",
            { exact : true}
        );

        this.courseSearch = page.getByTestId("course-search");

        this.departmentFilter = page.getByTestId("dept-filter");

        this.courseRows = page.locator("#cb tr");

        this.previousButton = page.locator("#pv");

        this.nextButton = page.locator("#nx");

        this.paginationInfo = page.locator("#pi");

        this.viewButtons = page.locator("#cb button[data-v]");
    }

    async clickMyCourses() {
        await this.myCoursesLink.click();
    }

    async searchCourse(courseName) {
        await this.courseSearch.fill(courseName);
    }

    async selectDepartment(department) {
        await this.departmentFilter.selectOption({
            label : department
        });
    }
}

module.exports = { DashboardPage };