//nRajoy 
(function($) {
	
    var self = $.nRajoy = new function(){};
	
    $.extend(self, {

    	nRajoyBackgrounds : [
    		'http://img.europapress.net/fotoweb/fotonoticia_20150528144614-15051323919_644.jpg'
    	],

        nRajoyImgs : [
			'http://i.imgur.com/eZP4k2b.jpg',
			'http://i.imgur.com/uKtmQfl.jpg',
			'http://i.imgur.com/wMzkEgp.jpg',
			'http://i.imgur.com/4S8731r.jpg',
			'http://i.imgur.com/PTcCwZG.jpg',
			'http://i.imgur.com/cTX0VRj.jpg',
			'http://i.imgur.com/9I4T4hI.jpg',
			'http://i.imgur.com/5LYgMZK.jpg',
			'http://i.imgur.com/H7pBXee.jpg',
			'http://i.imgur.com/4xEfG8q.jpg',
			'http://i.imgur.com/e3mU3No.jpg',
			'http://i.imgur.com/baXyIP4.jpg',
			'http://i.imgur.com/xkkrK4n.jpg',
			'http://i.imgur.com/zzfMtdb.jpg',
			'http://i.imgur.com/fsAoDqT.jpg',
			'http://i.imgur.com/DBynnfg.jpg',
			'http://i.imgur.com/CXPKhUx.jpg',
			'http://i.imgur.com/MjLAo0e.jpg',
			'http://i.imgur.com/1Xc78CL.jpg',
			'http://i.imgur.com/xsgrVAq.jpg',
			'http://i.imgur.com/1z7ayYW.jpg',
			'http://i.imgur.com/GHIuQJv.jpg',
			'http://i.imgur.com/Vg2VkfK.jpg',
			'http://i.imgur.com/1qTnksU.jpg',
			'http://i.imgur.com/RbW3UPx.jpg',
			'http://i.imgur.com/yQ79Ikm.jpg'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nRajoyImgs, 3000);
     	self.handleLogo(self.nRajoyBackgrounds, 3000);
    });
})(jQuery);



/*
'http://i.imgur.com/eZP4k2b.jpg',
'http://i.imgur.com/uKtmQfl.jpg',
'http://i.imgur.com/wMzkEgp.jpg',
'http://i.imgur.com/4S8731r.jpg',
'http://i.imgur.com/PTcCwZG.jpg',
'http://i.imgur.com/cTX0VRj.jpg',
'http://i.imgur.com/9I4T4hI.jpg',
'http://i.imgur.com/5LYgMZK.jpg',
'http://i.imgur.com/H7pBXee.jpg',
'http://i.imgur.com/4xEfG8q.jpg',
'http://i.imgur.com/e3mU3No.jpg',
'http://i.imgur.com/baXyIP4.jpg',
'http://i.imgur.com/xkkrK4n.jpg',
'http://i.imgur.com/zzfMtdb.jpg',
'http://i.imgur.com/fsAoDqT.jpg',
'http://i.imgur.com/DBynnfg.jpg',
'http://i.imgur.com/CXPKhUx.jpg',
'http://i.imgur.com/MjLAo0e.jpg',
'http://i.imgur.com/1Xc78CL.jpg',
'http://i.imgur.com/xsgrVAq.jpg',
'http://i.imgur.com/1z7ayYW.jpg',
'http://i.imgur.com/GHIuQJv.jpg',
'http://i.imgur.com/Vg2VkfK.jpg',
'http://i.imgur.com/1qTnksU.jpg',
'http://i.imgur.com/RbW3UPx.jpg',
'http://i.imgur.com/yQ79Ikm.jpg'



*/
