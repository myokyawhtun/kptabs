#kpTabs jQuery plugin

kpTabs is a jquery plugin created by Myo Kyaw Htun to display the tabs and sub tabs.

##Usage
### Javascript
```javascript
$(document).ready(function(){
	$("#tabWrap").kptabs();
});
```
###HTML
```html
<div id="tabWrap">
	<div class="tab" data-rel="News">
		<h3>News without sub tab</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua.</p>
		<p>
		Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
	<div class="tab" data-rel="Technology">
		<div class="subtab" data-rel="Mobile">
			<h3>Mobile</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua.</p>
		</div>
		<div class="subtab" data-rel="Software">
			<h3>Software</h3>
			<p> Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur.</p>
		</div>
		<div class="subtab" data-rel="Apple">
			<h3>Apple</h3>
			<p>Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	</div>
	<div class="tab" data-rel="Sports">
		<h3>Sports</h3>
		<p> Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur.</p>
		<p>Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>
</div>
```
###CSS
```css
/* tab and sub tab */
.tab,.subtab{
	display: none;
	overflow: hidden;
}
/* selected tab and selected sub tab*/
.selectedTab,.selectedSubTab{
	display: block;
}

/*
generated Top level Tab Navigation
*/
#tabsNav {
	overflow: hidden;
	border-bottom:1px solid #ddd;
}
#tabsNav ul, .subNav ul{
	list-style: none;
	margin: 0px;
	padding: 0px;
	display: inline;
}
#tabsNav li, .subNav li{
	display: inline-block;
}
#tabsNav a, .subNav a{
	display: block;
	padding:5px 10px;
	text-decoration: none;
	
}
.subNav{
	margin:10px;
	
}
#tabsNav a.selectedNav{
	background: #eee;
}
.subNav a.selectedSubNav{
	background: #ddf;
}
```