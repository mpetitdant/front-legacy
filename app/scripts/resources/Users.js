/*
 * Copyright (c) 2016 BreizhCamp
 * [http://breizhcamp.org]
 *
 * This file is part of CFP.io.
 *
 * CFP.io is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

angular.module('CallForPaper').factory('Users', function($q, $http, AppConfig) {

    return {
        save: function(user) {
            if (user.id) {
                return this.update(user);
            } else {
                return this.create(user);
            }
        },
        create: function(user) {
            return $http.post(AppConfig.apiBaseUrl + '/users', user)
                .then(function(response) {
                    return response.data;
                }).catch(function(response) {
                    return $q.reject(response);
                });
        },
        update: function(user) {
            return $http.put(AppConfig.apiBaseUrl + '/users/'+user.id, user)
                .then(function(response) {
                    return response.data;
                }).catch(function(response) {
                    return $q.reject(response);
                });
        },
        get: function(id) {
            return $http.get(AppConfig.apiBaseUrl + '/users/'+id)
                .then(function(response) {
                    return response.data;
                }).catch(function(response) {
                    return $q.reject(response);
                });
        },
        getCurrentUser: function() {
            return $http.get(AppConfig.apiBaseUrl + '/users/me')
                .then(function(response) {
                    return response.data;
                }).catch(function(response) {
                    return $q.reject(response);
                });
        },
        getLoginUrl: function() {
            return $http.post(AppConfig.apiBaseUrl + '/adminUser/login')
                .then(function(response) {
                    return response.data;
                }).catch(function(response) {
                    return $q.reject(response);
                });
        },
        delete: function(id) {
            return $http.delete(AppConfig.apiBaseUrl + '/users/'+id)
                .then(function(response) {
                    return response.data;
                }).catch(function(response) {
                    return $q.reject(response);
                });
        },
        getLogoutUrl: function() {
            return $http.post(AppConfig.apiBaseUrl + '/adminUser/logout')
                .then(function(response) {
                    return response.data;
                }).catch(function(response) {
                    return $q.reject(response);
                });
        }
    };
});

