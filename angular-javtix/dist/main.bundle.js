webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllService = /** @class */ (function () {
    function AllService(http, httpClient, router) {
        this.http = http;
        this.httpClient = httpClient;
        this.router = router;
        this.citiesResponse = {};
        this.schedulesResponse = {};
        this.cinemasResponse = {};
        this.movieInfoResponse = {};
        this.header = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
        };
    }
    /* REST API */
    AllService.prototype.signUpService = function (signup) {
        var url = 'https://api.javtix.me/api/register';
        this.httpClient.post(url, signup, this.header).subscribe(function (res) { return console.log("Register success!"); }, function (err) { return console.log(err.error); });
    };
    AllService.prototype.signinService = function (signin) {
        var _this = this;
        var response = {};
        var url = 'https://api.javtix.me/api/login';
        return this.httpClient.post(url, signin, this.header).map(function (res) {
            response = res;
            // console.log(response);
            localStorage.setItem('response', JSON.stringify(response));
            // localStorage.setItem('success', JSON.stringify(response['success']));
            console.log(localStorage.getItem('success'));
            _this.token = response['data']['success'];
            _this.name = response['data']['user']['name'];
            _this.userId = response['data']['user']['id'];
            localStorage.setItem('success', _this.token);
            localStorage.setItem('name', _this.name);
            localStorage.setItem('id', _this.userId);
        }, function (err) {
            var error = err.error;
            console.log(error);
        });
    };
    AllService.prototype.buyTicket = function (transaction) {
        var response = {};
        var url = 'https://api.javtix.me/api/purchases';
        return this.httpClient.post(url, transaction, this.header).map(function (res) {
            response = res;
            console.log(response);
        }, function (err) { return console.log(err.error); });
    };
    AllService.prototype.getProfile = function (id) {
        var url = 'https://api.javtix.me/api/customer/' + id;
        return this.httpClient.get(url, this.header);
    };
    AllService.prototype.updateProfile = function (profile) {
        var url = 'https://api.javtix.me/api/customer/' + profile.id;
        console.log(profile);
        return this.httpClient.put(url, profile, this.header);
    };
    AllService.prototype.getAllSchedules = function () {
        return this.http.get('https://api.javtix.me/api/schedule').map(function (res) { return res.json(); });
    };
    AllService.prototype.getAllCinemas = function () {
        return this.http.get('https://api.javtix.me/api/cinema').map(function (res) { return res.json(); });
    };
    AllService.prototype.getAllNowPlayingMovies = function () {
        return this.http.get('https://api.javtix.me/api/movie/nowplaying').map(function (res) { return res.json(); });
    };
    AllService.prototype.getAllComingSoonMovies = function () {
        return this.http.get('https://api.javtix.me/api/movie/comingsoon').map(function (res) { return res.json(); });
    };
    AllService.prototype.getMovieFromSearch = function (mov) {
        return this.http.get('https://api.javtix.me/api/movie/' + mov.id).map(function (res) { return res.json(); });
    };
    AllService.prototype.getAllCities = function () {
        return this.http.get('https://api.javtix.me/api/city').map(function (res) { return res.json(); });
    };
    AllService.prototype.getAllSeats = function (tid) {
        return this.http.get('https://api.javtix.me/api/all_seats/' + tid.id).map(function (res) { return res.json(); });
    };
    AllService.prototype.getAllPromos = function () {
        return this.http.get('https://api.javtix.me/api/promo').map(function (res) { return res.json(); });
    };
    AllService.prototype.getPrice = function () {
        return this.http.get('https://api.javtix.me/api/pricing').map(function (res) { return res.json(); });
    };
    AllService.prototype.getPromoValue = function (pid) {
        return this.http.get('https://api.javtix.me/api/promoval/' + pid).map(function (res) { return res.json(); });
    };
    AllService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AllService);
    return AllService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_team_component__ = __webpack_require__("./src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movie_movie_component__ = __webpack_require__("./src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'movie/:id/:city', component: __WEBPACK_IMPORTED_MODULE_5__movie_movie_component__["a" /* MovieComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: 'meet-the-team', component: __WEBPACK_IMPORTED_MODULE_4__team_team_component__["a" /* TeamComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n\tbackground-size: cover;\r\n}\r\n\r\n.logoFooter {\r\n\tpointer-events: none;\r\n}\r\n\r\n.ads {\r\n\twidth: 100%;\r\n}\r\n\r\n.adImages {\r\n\twidth: 250px;\r\n\theight: 300px;\r\n}\r\n\r\n.cinemaImages {\r\n\twidth: 50%;\r\n\theight: 50%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#2A363B\">\r\n\r\n  <app-navigation></app-navigation>\r\n\r\n  <router-outlet></router-outlet>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__all_service__ = __webpack_require__("./src/app/all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("./src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__team_team_component__ = __webpack_require__("./src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__movie_movie_component__ = __webpack_require__("./src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__movie_movie_component__["a" /* MovieComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__all_service__["a" /* AllService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // if user does not logged in, redirect to login page
        if (localStorage.getItem('response')) {
            return true;
        }
        this.router.navigate(['/user']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color: #2A363B\" onload=\"tabbed(event, 'dashboard');\">\r\n    <br>\r\n    <br>\r\n    <div style=\"color:aliceblue; width:80%; position:relative; margin:auto\">\r\n        <div class=\"tab\" style=\"text-align:center\">\r\n            <button class=\"tablinks\" onclick=\"tabbed(event, 'dashboard')\" style=\"color: black\">Dashboard</button>\r\n            <button class=\"tablinks\" onclick=\"tabbed(event, 'edit')\" style=\"color: black\">Edit</button>\r\n        </div>\r\n        <!-- Display current data -->\r\n        <div id=\"dashboard\" class=\"tabcontent\" style=\"background-color: #2A363B\">\r\n            <h3>Dashboard</h3>\r\n            <hr>\r\n            <form method=\"post\">\r\n            <fieldset id=\"profile\" style=\"border: none\" disabled>\r\n                <h5>\r\n                    <b>--Name--</b>\r\n                </h5>\r\n                <input type=\"text\" id=\"profileA\" name=\"name\" [(ngModel)]=\"model.name\">\r\n                <br>\r\n                <br>\r\n                <h5>\r\n                    <b>--Birthday--</b>\r\n                </h5>\r\n                <input type=\"text\" id=\"profileB\" name=\"birthDate\" [(ngModel)]=\"model.birthDate\">\r\n                <br>\r\n                <br>\r\n                <h5>\r\n                    <b>--City--</b>\r\n                </h5>\r\n                <input type=\"text\" id=\"profileC\" name=\"city\" [(ngModel)]=\"model.city\">\r\n                <br>\r\n                <br>\r\n                <h5>\r\n                    <b>--Phone Number--</b>\r\n                </h5>\r\n                <input type=\"tel\" id=\"profileD\" name=\"phoneNumber\" [(ngModel)]=\"model.phoneNumber\">\r\n                <br>\r\n                <br>\r\n                <h5>\r\n                    <b>--Email--</b>\r\n                </h5>\r\n                <input type=\"email\" id=\"profileE\" name=\"email\" [(ngModel)]=\"model.email\">\r\n                <br>\r\n                <br>\r\n            </fieldset>\r\n            </form>\r\n        </div>\r\n        <!-- Also display current data, but pencil button allow edit of current data -->\r\n        <div id=\"edit\" class=\"tabcontent\" style=\"background-color: #2A363B\">\r\n            <h3>Edit</h3>\r\n            <hr>\r\n            <h5 style=\"text-align: center\">If you need any changes, please contact the admin.</h5>\r\n        </div>   \r\n    </div>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_service__ = __webpack_require__("./src/app/all.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service) {
        this.service = service;
        this.model = [];
        this.userData = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.showProfile();
    };
    DashboardComponent.prototype.showProfile = function () {
        var _this = this;
        this.service.getProfile(localStorage.getItem('id')).subscribe(function (res) {
            _this.model.name = res[0]["name"];
            _this.model.email = res[0]["email"];
            _this.model.phoneNumber = res[0]["phone_number"];
            _this.model.gender = res[0]["gender"];
            _this.model.birthDate = res[0]["birth_date"];
            _this.model.city = res[0]["city"];
            _this.model.id = localStorage.getItem('id');
        }, function (err) { return console.log(localStorage.getItem('id')); });
    };
    DashboardComponent.prototype.save = function () {
        var _this = this;
        console.log(this.model);
        this.service.updateProfile(this.model).subscribe(function (res) {
            alert('Profile successfully saved!');
            _this.showProfile();
        }, function (err) { return console.log(err.error); });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__all_service__["a" /* AllService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n\tbackground-size: cover;\r\n\tbackground-repeat: no-repeat;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body background=\"../assets/images/bg.jpg\">\r\n\r\n\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"width:100%\">\r\n\t    <ol class=\"carousel-indicators\">\r\n\t        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t        <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n\t    </ol>\r\n\r\n\t    <div class=\"carousel-inner\">\r\n\t        <div class=\"item active\" align=\"middle\" style=\"height:700px\">\r\n\t            <img src=\"../assets/images/Mov1.jpg\" style=\"width:110%; position:absolute; top:-30%\">\r\n\t            <div class=\"carousel-caption\">\r\n\t                <h3>Star Wars: The New Hope</h3>\r\n\t            </div>\r\n\t        </div>\r\n\r\n\t        <div class=\"item\" align=\"middle\" style=\"height:700px;\">\r\n\t            <img src=\"../assets/images/Mov2.jpg\" style=\"width:120%; position:absolute; top:-80%\">\r\n\t            <div class=\"carousel-caption\">\r\n\t                <h3>Star Wars: The Empire Strikes Back</h3>\r\n\t            </div>\r\n\t        </div>\r\n\r\n\t        <div class=\"item\" align=\"middle\" style=\"height:700px\">\r\n\t            <img src=\"../assets/images/Mov3.jpg\" style=\"width: 120%; position:absolute; top:-90%\">\r\n\t            <div class=\"carousel-caption\">\r\n\t                <h3>Star Wars: Revenge of the Jedi</h3>\r\n\t            </div>\r\n\t        </div>\r\n\r\n\t        <div class=\"item\" align=\"middle\" style=\"height:700px\">\r\n\t            <img src=\"../assets/images/Mov4.jpg\" style=\"width: 120%; position:absolute; top:-20%\">\r\n\t            <div class=\"carousel-caption\">\r\n\t                <h3>Back From the Future</h3>\r\n\t            </div>\r\n\t        </div>\r\n\t    </div>\r\n\r\n\t    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t        <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t        <span class=\"sr-only\">Previous</span>\r\n\t    </a>\r\n\t    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t        <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t        <span class=\"sr-only\">Next</span>\r\n\t    </a>\r\n\t</div>\r\n\r\n\t<nav class=\"navbar navbar-inverse\">\r\n        <select (change)=\"changeMovie($event)\">\r\n            <option selected disabled>Select Movie...</option>\r\n            <option *ngFor=\"let movie of nowPlayingMovies\" [value]=\"movie.id\">{{movie.movie_name}}</option>\r\n        </select>\r\n        <select (change)=\"changeCity($event)\">\r\n            <option selected disabled>Select City...</option>\r\n            <option *ngFor=\"let city of allCities\" [value]=\"city.city\">{{city.city}}</option>\r\n        </select>\r\n        <button (click)=\"search()\"><span class=\"glyphicon glyphicon-search\"></span>Search</button>\r\n\t</nav>\r\n\r\n\t<div style=\"color:aliceblue\">\r\n\t    <h2 id=\"mov\" class=\"movieHeader\" style=\"text-align:center\">Now Playing</h2>\r\n\t    <hr>\r\n\t    <div class=\"row\" style=\"width:100%\" align=\"center\">\r\n\t        <div *ngFor=\"let movie of nowPlayingMovies\" class=\"col-sm-3\">\r\n\t            <button (click)=\"movieClick(movie.id)\"><img src=\"{{movie.image_url}}\" class=\"view\"></button>\r\n\t        </div>\r\n\t    <br>\r\n        </div>\r\n\r\n    <h2 id=\"mov\" class=\"movieHeader\" style=\"text-align:center\">Coming Soon</h2>\r\n    <hr>\r\n    <div class=\"row\" style=\"width:100%\" align=\"center\">\r\n        <div *ngFor=\"let movie of comingSoonMovies\" class=\"col-sm-3\">\r\n            <img src=\"{{movie.image_url}}\" class=\"view comingSoon\">\r\n        </div>\r\n    <br>\r\n    </div>\r\n    <br>\r\n    <h2 class=\"header\" style=\"text-align:center\">Cinemas</h2>\r\n    <hr>\r\n    <div class=\"row\" style=\"width:100%\" align=\"center\">\r\n        <div class=\"col-sm-6\">\r\n            <a href=\"https://www.instagram.com/cgv.id/\" target=\"_blank\"><img src=\"https://i.imgur.com/npzayo8.png\" class=\"view cinemaImages\"></a>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n            <a href=\"https://www.facebook.com/CinemaXXI?ref=ts&fref=ts\" target=\"_blank\"><img src=\"https://i.imgur.com/gfIcn4D.png\" class=\"view cinemaImages\"></a>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <br>\r\n    <h2 id=\"ads\" class=\"header\" style=\"text-align:center\">Ads</h2>\r\n    <br>\r\n    <br>\r\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"width:101%\">\r\n        <ol class=\"carousel-indicators\">\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n            <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n        </ol>\r\n\r\n        <div class=\"carousel-inner\">\r\n            <div class=\"item active\" align=\"middle\">\r\n                <img src=\"https://i.imgur.com/rDCoJrD.png\" class=\"adImages\">\r\n            </div>\r\n\r\n            <div class=\"item\" align=\"middle\">\r\n                <img src=\"https://i.imgur.com/DPOVe3g.png\" class=\"adImages\">\r\n            </div>\r\n            <div class=\"item\" align=\"middle\">\r\n                <img src=\"https://i.imgur.com/cNnHyPt.png\" class=\"adImages\">\r\n            </div>\r\n\r\n            <div class=\"item\" align=\"middle\">\r\n                <img src=\"https://i.imgur.com/1suqZnV.png\" class=\"adImages\">\r\n            </div>\r\n        </div>\r\n\r\n        <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n        <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n            <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n        </a>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n    <hr style=\"width:101%\">\r\n    <footer>\r\n      COPYRIGHT 2018. JAVTix ALL RIGHTS RESERVED.\r\n    </footer>\r\n</div>\r\n</body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_service__ = __webpack_require__("./src/app/all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, service, router) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.movieSearchData = {};
        this.selectedMovie = "6fb7fdba-5c31-4b5a-a06f-1cc3773b13c4";
        this.selectedCity = "Jakarta";
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllNowPlayingMovies().subscribe(function (datas) {
            _this.nowPlayingMovies = datas;
            console.log(datas);
        }, function (error) {
            _this.error = error.statusText;
        });
        this.service.getAllComingSoonMovies().subscribe(function (datas) { return _this.comingSoonMovies = datas; }, function (error) { return console.log(error); });
        this.service.getAllCities().subscribe(function (datas) { return _this.allCities = datas; }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.viewMovieInfo = function (mid) {
        console.log(mid);
        this.router.navigate(["/movie/" + mid]);
    };
    HomeComponent.prototype.changeMovie = function (e) {
        this.selectedMovie = e.target.value;
    };
    HomeComponent.prototype.changeCity = function (e) {
        this.selectedCity = e.target.value;
    };
    // search movie and schedule based on search functionality
    HomeComponent.prototype.search = function () {
        console.log(this.selectedMovie);
        console.log(this.selectedCity);
        this.router.navigate(["/movie/" + this.selectedMovie + "/" + this.selectedCity]);
    };
    // if user does not use the search function, the movie schedule will be automatically based on Jakarta
    HomeComponent.prototype.movieClick = function (mid) {
        console.log(mid);
        this.router.navigate(["/movie/" + mid + "/Jakarta"]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__all_service__["a" /* AllService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div style=\"color:aliceblue\"> \r\n        <br>\r\n        <br>\r\n        <table cellspacing=\"10\" style=\"position:relative; left:25%\"> \r\n            <tr> \r\n                <td> \r\n                    <img src=\"{{ mov[0].image_url }}\"> \r\n                </td>\r\n                <td *ngIf=\"{ a: mov[0].movie_name } as variable\">\r\n                    <div *ngIf=\"variable.a == 'Blade Runner'\">\r\n                        <iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/gCcx85zbxz4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                    <div *ngIf=\"variable.a == 'Fight Club'\">\r\n                        <iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/BdJKm16Co6M\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                    <div *ngIf=\"variable.a == 'Hangover'\">\r\n                        <iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/tcdUhdOlz9M\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                    <div *ngIf=\"variable.a == 'The Greatest Showman'\">\r\n                        <iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/AXCTMGYUg9A\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                    <div *ngIf=\"variable.a == 'Logan'\">\r\n                        <iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/Div0iP65aZo\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                    <div *ngIf=\"variable.a == 'Maleficent'\">\r\n                        <iframe width=\"500\" height=\"350\" src=\"https://www.youtube.com/embed/w-XO4XiRop0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\"\r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                </td> \r\n            </tr> \r\n        </table> \r\n        <br> \r\n        <table style=\"position:relative; left:25%; color:aliceblue\"> \r\n            <tr> \r\n                <td style=\"width:750px\"> \r\n                \t<h2>{{ mov[0].movie_name }}</h2>\r\n                \t<br>\r\n                    {{ mov[0].synopsis }}\r\n                    <br>\r\n                    <br>\r\n                    Director: {{ mov[0].director }}\r\n                    <br>\r\n                    Stars: {{ mov[0].casts }}\r\n                    <br>\r\n                    <br>\r\n                    Duration: {{ mov[0].duration }} minutes\r\n                    <br>\r\n                    Rating: {{ mov[0].rating }}\r\n                </td> \r\n            </tr> \r\n        </table> \r\n        <h2 id=\"schedule\" style=\"text-align:center\">Schedule</h2> \r\n        <hr> \r\n        <div class=\"row\" style=\"width:100%\" align=\"center\"> \r\n            <div class=\"col-sm-6\"> \r\n                <table style=\"color:aliceblue\"> \r\n                    <tr> \r\n                        <th style=\"text-align:center\"> \r\n                            <h3>Time</h3> \r\n                        </th> \r\n                    </tr> \r\n                    <tr> \r\n                        <td style=\"text-align:center\">\r\n                            <ul>\r\n                                <li *ngFor=\"let info of movieInfo\">{{info.time}}</li>\r\n                            </ul>\r\n                        </td> \r\n                    </tr> \r\n                </table> \r\n            </div>\r\n            <div class=\"col-sm-6\"> \r\n                <table style=\"color:aliceblue\"> \r\n                    <tr> \r\n                        <th style=\"text-align:center\"> \r\n                            <h3>Place</h3> \r\n                        </th> \r\n                    </tr> \r\n                    <tr> \r\n                        <td style=\"text-align:center\"> \r\n                            <ul>\r\n                                <li *ngFor=\"let info of movieInfo\">{{info.cinemas}}</li>\r\n                            </ul>\r\n                        </td> \r\n                    </tr> \r\n                </table> \r\n            </div>\r\n        </div> \r\n        <div *ngIf=\"loggedIn\" style=\"text-align:center\"> \r\n            <h3>Interested?</h3>\r\n            <form method=\"post\" (submit)=\"purchase()\">\r\n                <h5>Select Theatre</h5> \r\n                <select style=\"color:black\" (change)=\"selectTheatre($event)\"> \r\n                    <option style=\"color:grey\" disabled selected>Select</option> \r\n                    <option *ngFor=\"let info of lstOfTheatre\">{{info}}</option>\r\n                </select> \r\n                <h5>Select Time</h5> \r\n                <select style=\"color:black\" (change)=\"selectTime($event)\"> \r\n                    <option style=\"color:grey\" disabled selected>Select</option> \r\n                    <option *ngFor=\"let info of lstOfTime\">{{info}}</option>\r\n                </select>\r\n                <h4>Seats</h4> \r\n                <select style=\"color:black\" (change)=\"selectSeat($event)\">\r\n                    <option style=\"color:grey\" disabled selected>Select</option>\r\n                    <option *ngFor=\"let info of selectedSeat\" [value]=\"info['id']\">{{info['seat_number']}}</option>\r\n                </select>\r\n                <br>\r\n                <h4>Promo Available</h4> \r\n                <select style=\"color:black\" (change)=\"selectPromo($event)\">\r\n                    <option style=\"color:grey\" disabled selected>Select</option>\r\n                    <option *ngFor=\"let info of lstOfPromos\" [value]=\"info.id\">{{info.name}}</option>\r\n                </select>\r\n                <br><br>\r\n                <input type=\"submit\" value=\"Submit\" name=\"Purchase\" id=\"buy\" (click)=\"purchase()\" style=\"color:black; width:7%; position:absolute; left:46.5%; background-color: grey; border: 2px solid black\">\r\n            </form> \r\n        </div> \r\n    </div> \r\n    <br> \r\n    <footer> \r\n    </footer> \r\n</body>"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__all_service__ = __webpack_require__("./src/app/all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieComponent = /** @class */ (function () {
    function MovieComponent(http, service, route, router) {
        this.http = http;
        this.service = service;
        this.route = route;
        this.router = router;
        this.mov = {};
        this.movieInfo = {};
        this.pricingInfo = {};
        this.paymentInfo = {};
        this.lstOfTheatre = [];
        this.lstOfTime = [];
        this.lstOfSeats = [];
        this.lstOfPromos = {};
        this.promoVal = {};
        this.loggedIn = false;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedIn = localStorage.getItem('success') ? true : false;
        this.route.params.subscribe(function (res) {
            //get movie info
            _this.http.get("https://api.javtix.me/api/movie?id=" + res['id']).subscribe(function (res2) {
                _this.mov = res2;
            });
            //get schedule depends on movie and city selected
            _this.http.get("https://api.javtix.me/api/schedule?id=" + res['id'] + "&city=" + res['city']).subscribe(function (res3) {
                _this.movieInfo = res3;
                for (var _i = 0, _a = _this.movieInfo; _i < _a.length; _i++) {
                    var t = _a[_i];
                    if (_this.lstOfTheatre.indexOf(t['cinemas']) == -1) {
                        _this.lstOfTheatre.push(t['cinemas']);
                    }
                }
            }, function (error) {
                _this.error = error.statusText;
            });
        });
        //get all promo available
        this.service.getAllPromos().subscribe(function (all) {
            _this.lstOfPromos = all;
            console.log(_this.lstOfPromos);
        }, function (err) { return console.log(err.error); });
    };
    // fake(unanonymous function) for stripe checkout
    MovieComponent.prototype.faker = function (tokens) {
        this.paymentInfo['stripeToken'] = tokens.id;
        this.paymentInfo.stripeEmail = tokens.email;
        this.paymentInfo.user_id = localStorage.getItem('id');
        this.paymentInfo.stripeTokenType = 'card';
        console.log(this.paymentInfo);
        window.setTimeout(function () { window.location.href = '/home'; }, 3600);
        this.service.buyTicket(this.paymentInfo).subscribe(function (res) {
            console.log(res);
        }, function (err) { return console.log(err.error); });
    };
    // function upon clicking submit button for payment
    MovieComponent.prototype.purchase = function () {
        var flag;
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_18fkuvplx0UaWxpA8IOObWP2',
            locale: 'auto',
            token: this.faker.bind(this),
        });
        handler.open({
            name: 'Javtix',
            description: 'Payment',
            amount: this.pricingInfo[0].weekday_price - this.promoVal[0].value
        });
        this.paymentInfo.schedule_id = this.id1;
        this.paymentInfo.seat_id = this.selectedSeat;
        this.paymentInfo.quantity = 1;
        this.paymentInfo.total_price = this.pricingInfo[0].weekday_price - this.promoVal[0].value;
        this.paymentInfo.promo_id = this.selectedPromo;
        console.log(this.paymentInfo.total_price);
    };
    // after selecting the theatre, the time also will be shown corresponding to the selected theatre
    MovieComponent.prototype.selectTheatre = function (e) {
        this.selectedTheatre = e.target.value;
        for (var _i = 0, _a = this.movieInfo; _i < _a.length; _i++) {
            var t = _a[_i];
            if (t['cinemas'] == e.target.value) {
                this.lstOfTime.push(t['time']);
            }
        }
    };
    // seats will be also shown corresponding to the schedule/time selected
    MovieComponent.prototype.selectTime = function (e) {
        var _this = this;
        this.selectedTime = e.target.value;
        for (var _i = 0, _a = this.movieInfo; _i < _a.length; _i++) {
            var t = _a[_i];
            if (t['time'] == this.selectedTime && t['cinemas'] == this.selectedTheatre) {
                this.id2 = t['theatre_id'];
                this.id1 = t['id'];
                break;
            }
        }
        this.http.get("https://api.javtix.me/api/availableSeat?schedule_id=" + this.id1 + "&theatre_id=" + this.id2).subscribe(function (res) {
            _this.selectedSeat = res;
            console.log(_this.selectedSeat);
        });
    };
    // get the id of the seat
    MovieComponent.prototype.selectSeat = function (e) {
        var _this = this;
        this.selectedSeat = e.target.value;
        console.log(this.selectedSeat);
        this.http.get("https://api.javtix.me/api/pricing?id=" + this.selectedSeat).subscribe(function (res) {
            _this.pricingInfo = res;
            console.log(_this.pricingInfo[0].weekday_price);
        }, function (err) { return console.log(err.error); });
    };
    // get the value of the promo
    MovieComponent.prototype.selectPromo = function (e) {
        var _this = this;
        this.selectedPromo = e.target.value;
        this.service.getPromoValue(this.selectedPromo).subscribe(function (res) {
            _this.promoVal = res;
            // console.log(this.promoVal);
        }, function (err) { return console.log(err.error); });
    };
    MovieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie',
            template: __webpack_require__("./src/app/movie/movie.component.html"),
            styles: [__webpack_require__("./src/app/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__all_service__["a" /* AllService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand logo\" routerLink=\"/home\">JAVTix</a>\r\n        </div>\r\n        <ul class=\"nav navbar-nav navs\">\r\n          <li class=\"view zoom\">\r\n              <a routerLink=\"/home\"><span class=\"glyphicon glyphicon-home\"></span></a>\r\n          </li>\r\n          <li class=\"navs view zoom\">\r\n              <a routerLink=\"/meet-the-team\">Meet the team</a>\r\n          </li>\r\n        </ul>\r\n        <ul *ngIf=\"loggedIn\" class=\"nav navbar-nav navbar-right navs\">\r\n          <li>\r\n            <a class=\"btn btn-danger\" role=\"button\" (click)=\"logout()\">Logout</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right navs view zoom\">\r\n            <li>\r\n                <a href=\"/dashboard\">\r\n                    <span class=\"glyphicon glyphicon-user\"></span> User</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.loggedIn = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.loggedIn = localStorage.getItem('success') ? true : false;
    };
    NavigationComponent.prototype.logout = function () {
        window.location.href = "/user";
        localStorage.clear();
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/signin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signin; });
var Signin = /** @class */ (function () {
    function Signin() {
    }
    return Signin;
}());



/***/ }),

/***/ "./src/app/signup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
var Signup = /** @class */ (function () {
    function Signup() {
    }
    return Signup;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color: #2A363B\">\n    <div style=\"color:aliceblue; width:80%; position:relative; margin:auto\">\n        <div class=\"tab\" style=\"text-align:center\">\n            <button class=\"tablinks\" style=\"color: black\">Sign Up</button>\n            <button class=\"tablinks\" style=\"color: black\">Login</button>\n        </div>\n        <div id=\"SignUp\" class=\"tabcontent\">\n            <h3>Sign Up</h3>\n            <hr>\n            <form action=\"\">\n                <h5>First Name</h5>\n                <input type=\"text\" value=\"\" name=\"firstName\" require>\n                <h5>Last Name</h5>\n                <input type=\"text\" value=\"\" name=\"lastName\" require>\n                <h5>Email</h5>\n                <input type=\"email\" value=\"\" name=\"email\" require>\n                <h5>Password</h5>\n                <input type=\"password\" value=\"\" name=\"password\" require>\n                <h5>Phone Number</h5>\n                <input type=\"text\" value=\"\" name=\"phone\" require>\n                <h5>Gender</h5>\n                  <select name=\"gender\" id=\"select\">\n                    <option value=\"\" selected disabled>Select</option>\n                    <option value=\"male\">Male</option>\n                    <option value=\"female\">Female</option>\n                  </select>\n                <h5>Birthdate</h5>\n                <div class=\"container\" id=\"select\">\n                  <div class=\"row\">\n                    <div class='col-sm-6'>\n                      <div class=\"form-group\">\n                        <div class='input-group date' id='datetimepicker1'>\n                          <input type='text' class=\"form-control\" />\n                          <span class=\"input-group-addon\">\n                            <span class=\"glyphicon glyphicon-calendar\"></span>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <h5>City</h5>\n                  <select name=\"city\" id=\"select\">\n                    <option value=\"\" selected disabled>Select</option>\n                    <option value=\"test1\">Test1</option>\n                    <option value=\"test2\">Test2</option>\n                  </select>\n                <br><br>\n                <input type=\"submit\" value=\"Submit\" name=\"Submit\" style=\"color:black; width:7%; position:relative; left:47%; background-color: grey; border: 2px solid black\">\n            </form>\n        </div>\n    </div>\n    <!-- <div style=\"color:aliceblue; width:80%; position:relative; margin:auto\">\n        <div class=\"tab\" style=\"text-align:center\">\n            <button class=\"tablinks\" onclick=\"tabbed(event, 'SignUp')\" style=\"color: black\">Sign Up</button>\n            <button class=\"tablinks\" onclick=\"tabbed(event, 'LogIn')\" style=\"color: black\">Log In</button>\n        </div>\n        <div id=\"SignUp\" class=\"tabcontent\">\n            <h3>Sign Up</h3>\n            <hr>\n            <form action=\"\">\n                <h5>First Name</h5>\n                <input type=\"text\" value=\"\" name=\"firstName\" require>\n                <h5>Last Name</h5>\n                <input type=\"text\" value=\"\" name=\"lastName\" require>\n                <h5>Email</h5>\n                <input type=\"email\" value=\"\" name=\"email\" require>\n                <h5>Password</h5>\n                <input type=\"password\" value=\"\" name=\"password\" require>\n                <h5>Phone Number</h5>\n                <input type=\"text\" value=\"\" name=\"phone\" require>\n                <h5>Gender</h5>\n                  <select name=\"gender\" id=\"select\">\n                    <option value=\"\" selected disabled>Select</option>\n                    <option value=\"male\">Male</option>\n                    <option value=\"female\">Female</option>\n                  </select>\n                <h5>Birthdate</h5>\n                <div class=\"container\" id=\"select\">\n                  <div class=\"row\">\n                    <div class='col-sm-6'>\n                      <div class=\"form-group\">\n                        <div class='input-group date' id='datetimepicker1'>\n                          <input type='text' class=\"form-control\" />\n                          <span class=\"input-group-addon\">\n                            <span class=\"glyphicon glyphicon-calendar\"></span>\n                          </span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <h5>City</h5>\n                  <select name=\"city\" id=\"select\">\n                    <option value=\"\" selected disabled>Select</option>\n                    <option value=\"test1\">Test1</option>\n                    <option value=\"test2\">Test2</option>\n                  </select>\n                <br><br>\n                <input type=\"submit\" value=\"Submit\" name=\"Submit\" style=\"color:black; width:7%; position:relative; left:47%; background-color: grey; border: 2px solid black\">\n            </form>\n        </div>\n        <div id=\"LogIn\" class=\"tabcontent\">\n            <h3>Log In</h3>\n            <hr>\n            <form action=\"\">\n                <h5>Email</h5>\n                <input type=\"email\" value=\"\" name=\"email\" require>\n                <h5>Password</h5>\n                <input type=\"password\" value=\"\" name=\"password\" require>\n                <br><br>\n                <input type=\"submit\" value=\"Submit\" name=\"Submit\" style=\"color:black; width:7%; position:relative; left:47%; background-color: grey; border: 2px solid black\">\n            </form>\n        </div>\n    </div> -->\n</body>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/***/ (function(module, exports) {

module.exports = "img {\r\n\theight: auto;\r\n}\r\n\r\n.info {\r\n\tmargin-top: 80px;\r\n}\r\n\r\n.info2 {\r\n\tmargin-top: 100px;\r\n}\r\n\r\n.avatar {\r\n\tvertical-align: middle;\r\n\twidth: 50%;\r\n\theight: 50%;\r\n\tborder-radius: 50%;\r\n}\r\n\r\n.container {\r\n\tmargin-top: 50px;\r\n}\r\n\r\n.fa {\r\n\tpadding: 20px;\r\n\tfont-size: 30px;\r\n\twidth: 65px;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.fa:hover {\r\n\topacity: 0.7;\r\n}\r\n\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}\r\n\r\n.fa-instagram {\r\n\tbackground: #f09433; \r\n\tbackground: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); \r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );\r\n\tcolor: white;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: aliceblue\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<img src=\"https://i.imgur.com/bZ9TPs6.png?1\" alt=\"Avatar\" class=\"avatar\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<a class=\"fa fa-instagram\" role=\"button\"></a>\n\t\t\t\t<a class=\"fa fa-facebook\" role=\"button\"></a>\n\t\t\t\t<a class=\"fa fa-twitter\" role=\"button\"></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 info\">\n\t\t\t<p class=\"team\">Jeffrey Darmawan</p>\n\t\t\t<p>Backend</p>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6 info2\">\n\t\t\t<p class=\"team\">Archel Taneka</p>\n\t\t\t<p>Frontend, Deployment</p>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<a class=\"fa fa-instagram zoom\" role=\"button\"></a>\n\t\t\t\t<a class=\"fa fa-facebook\" role=\"button\"></a>\n\t\t\t\t<a class=\"fa fa-twitter\" role=\"button\"></a>\n\t\t\t</div>\n\t\t\t<img src=\"https://i.imgur.com/JMWGxOm.jpg\" alt=\"Avatar\" class=\"avatar\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<img src=\"https://i.imgur.com/np78myO.jpg\" alt=\"Avatar\" class=\"avatar\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<a class=\"fa fa-instagram\" role=\"button\"></a>\n\t\t\t\t<a class=\"fa fa-facebook\" role=\"button\"></a>\n\t\t\t\t<a class=\"fa fa-twitter\" role=\"button\"></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 info\">\n\t\t\t<p class=\"team\">Vincent Alexander</p>\n\t\t\t<p>Frontend</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("./src/app/team/team.component.html"),
            styles: [__webpack_require__("./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color: #2A363B\" onload=\"tabbed(event, 'LogIn');\">\r\n    <br>\r\n    <br>\r\n    <div style=\"color:aliceblue; width:80%; position:relative; margin:auto\">\r\n        <div class=\"tab\" style=\"text-align:center\">\r\n            <button class=\"tablinks\" onclick=\"tabbed(event, 'SignUp')\" style=\"color: black\">Sign Up</button>\r\n            <button class=\"tablinks\" onclick=\"tabbed(event, 'LogIn')\" style=\"color: black\">Log In</button>\r\n        </div>\r\n        <div id=\"SignUp\" class=\"tabcontent\">\r\n            <h3>Sign Up</h3>\r\n            <hr>\r\n            <form method=\"post\" (submit)=\"register()\">\r\n                <h5>Preferred Cinema</h5>\r\n                <select [(ngModel)]=\"signup.preferred_cinema_id\" name=\"preferredCinema\" id=\"select\">\r\n                    <option selected disabled>Select</option>\r\n                    <option *ngFor=\"let cinema of cinemaData\" [value]=\"cinema.id\">{{cinema.cinema_name}}</option> \r\n                </select>\r\n                <h5>Name</h5>\r\n                <input type=\"text\" [(ngModel)]=\"signup.name\" [ngModelOptions]=\"{standalone: true}\" require>\r\n                <h5>Email</h5>\r\n                <input type=\"email\" [(ngModel)]=\"signup.email\" [ngModelOptions]=\"{standalone: true}\" require>\r\n                <h5>Password</h5>\r\n                <input type=\"password\" [(ngModel)]=\"signup.password\" [ngModelOptions]=\"{standalone: true}\" require>\r\n                <h5>Phone Number</h5>\r\n                <input type=\"text\" [(ngModel)]=\"signup.phone_number\" [ngModelOptions]=\"{standalone: true}\" require>\r\n                <h5>Gender</h5>\r\n                <select [(ngModel)]=\"signup.gender\" [ngModelOptions]=\"{standalone: true}\" name=\"gender\" id=\"select\">\r\n                    <option selected disabled>Select</option>\r\n                    <option value=\"M\">Male</option>\r\n                    <option value=\"F\">Female</option>\r\n                </select>\r\n                <h5>Birthdate(Format: dd/mm/yyyy)</h5>\r\n                <input type=\"text\" [(ngModel)]=\"signup.birth_date\" [ngModelOptions]=\"{standalone: true}\" require>\r\n                <h5>City</h5>\r\n                  <select [(ngModel)]=\"signup.city\" name=\"city\" id=\"select\">\r\n                    <option value=\"\" selected disabled>Select</option>\r\n                    <option *ngFor=\"let city of cinemaData\" [value]=\"city.city\">{{city.city}}</option>\r\n                  </select>\r\n                <br><br>\r\n                <button type=\"submit\">\r\n                    <span class=\"glyphicon glyphicon-ok\" style=\"color: black\"></span>\r\n                </button>\r\n            </form>\r\n        </div>\r\n        <div id=\"LogIn\" class=\"tabcontent\">\r\n            <h3>Log In</h3>\r\n            <hr>\r\n            <form action=\"post\" (submit)=\"login()\">\r\n                <h5>Email</h5>\r\n                <input type=\"email\" [(ngModel)]=\"model.email\" [ngModelOptions]=\"{standalone: true}\" name=\"email\" require>\r\n                <h5>Password</h5>\r\n                <input type=\"password\" [(ngModel)]=\"model.password\" [ngModelOptions]=\"{standalone: true}\" name=\"password\" require>\r\n                <br><br>\r\n                <button type=\"submit\">\r\n                    <span class=\"glyphicon glyphicon-ok\" style=\"color: black\"></span>\r\n                </button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_service__ = __webpack_require__("./src/app/all.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__("./src/app/signup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin__ = __webpack_require__("./src/app/signin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = /** @class */ (function () {
    function UserComponent(http, allService) {
        this.http = http;
        this.allService = allService;
        this.signup = {};
        this.response = [];
        this.model = {};
    }
    UserComponent.prototype.register = function () {
        this.allService.signUpService(this.signup);
        // console.log(this.signup);
        alert("Register success! Please check your email for verification");
    };
    UserComponent.prototype.login = function () {
        var _this = this;
        this.allService.signinService(this.model).subscribe(function (res) {
            console.log('Login success');
            _this.signInFlag = true;
            setTimeout(function () { return window.location.href = "/dashboard"; }, 2000);
        }, function (err) { return console.log(err.error); });
    };
    // show all cities and cinemas for registration
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signup = new __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* Signup */]();
        this.model = new __WEBPACK_IMPORTED_MODULE_4__signin__["a" /* Signin */]();
        this.allService.getAllCinemas().subscribe(function (datas) {
            _this.cinemaData = datas;
            console.log(_this.cinemaData);
        }, function (error) { return _this.error = error.statusText; });
        this.allService.getAllCities().subscribe(function (cities) {
            _this.cityData = cities,
                console.log(_this.cityData);
        }, function (error) { return _this.cityError = error.statusText; });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__all_service__["a" /* AllService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__all_service__["a" /* AllService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map