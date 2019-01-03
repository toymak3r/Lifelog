/*
 *  This file is part of Lifelog.
 *  (based on work of Moeditor)
 *
 *  Copyright (c) 2018 Edward Facundo <toymak3r@gmail.com>
 *
 *  Moeditor is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Moeditor is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Moeditor. If not, see <http://www.gnu.org/licenses/>.
 */

 const os = require('os');
 var fs = require('fs');
 var lifelog_personal_dir = os.homedir()+'/.lifelog'; // TODO: work with different OS

 if (!fs.existsSync(lifelog_personal_dir)){
     fs.mkdirSync(lifelog_personal_dir);
 }

var gd = require('./lifelog-sync-gd')
