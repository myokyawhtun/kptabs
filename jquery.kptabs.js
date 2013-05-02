(function($){

	$.fn.kptabs = function(){
		
		var tabNavs = Array();
		

		this.each(function(){

			$(this).children('.tab').each(function(i){
				
				var tabid = 'tab-'+i;

				$(this).attr("id",tabid);

				var anc = $("<a />");
				anc.attr("href","#"+tabid);
				anc.html($(this).data('rel'));

				
				if(i==0){
					$(this).addClass("selectedTab");

					anc.addClass("selectedNav");
				}

				tabNavs[i] = anc;
				var subNavs = Array();
				$(this).children('.subtab').each(function(i){

					var subtabId = tabid + '-subtab-' + i;

					$(this).attr("id", subtabId);

					var subanc = $("<a />");
					subanc.attr("href","#"+subtabId);
					subanc.html($(this).data('rel'));
					
					if(i==0){
						$(this).addClass("selectedSubTab");

						subanc.addClass("selectedSubNav");
					}

					subNavs[i] = subanc;
				});
				if(subNavs.length>0){
					var tabsNav = $("<div class='subNav'>");
					var tabNavUl = $("<ul>");

					for(i=0;i<subNavs.length;i++){
						var tabLi = $("<li>");
						tabLi.append(subNavs[i]);
						tabNavUl.append(tabLi);
					}
					tabsNav.append(tabNavUl);

					$(this).prepend(tabsNav);
				}
			});

			if(tabNavs.length>0){
				// create Tab bar
				var tabsNav = $("<div id='tabsNav'>");
				var tabNavUl = $("<ul>");

				for(i=0;i<tabNavs.length;i++){
					var tabLi = $("<li>");
					tabLi.append(tabNavs[i]);
					tabNavUl.append(tabLi);
				}
				tabsNav.append(tabNavUl);

				$(this).prepend(tabsNav);

				$("#tabsNav a").bind('click',function(e){
					e.preventDefault();
					$(".tab").removeClass("selectedTab");
					$("#tabsNav a").removeClass("selectedNav");
					var selectedTab = $(this).attr('href');
					$(selectedTab).addClass("selectedTab");
					$(this).addClass("selectedNav");
				});

				$(".subNav a").bind('click',function(e){
					e.preventDefault();
					$(".subtab").removeClass("selectedSubTab");
					$(".subNav a").removeClass("selectedSubNav");
					var selectedNavTab = $(this).attr('href');
					$(selectedNavTab).addClass("selectedSubTab");
					$(this).addClass("selectedSubNav");
				});
			}
		});
	};
})(jQuery);