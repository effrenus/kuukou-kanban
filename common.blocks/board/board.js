modules.define('board', ['i-bem__dom'], function(provide, BEMDOM){

	provide(BEMDOM.decl(this.name, {

		onSetMod: {

			js: {
				inited: function(){
					if (this.isStickySupported()) {
						return;
					}
					this.setMod('sticky', false);

					// must be scroll proxy
					this.bindToWin('scroll', this._onScroll.bind(this), false);
					this.bindToWin('resize', this._onResize.bind(this), false);

					this._onResize();
					this._onScroll();
				}
			}

		},

		isStickySupported: function() {
			var el = document.createElement('div');
			el.style.position = 'sticky';
			return el.style.position !== '';
		},

		_onResize: function() {
			this._head = {h: this.elem('header').height()};
			this._geom = {w: this.domElem.width(), h: this.domElem.height()};
			this._offset = this.domElem.offset();

			this.elem('header').css({
				width: this._geom.w,
				left: this._offset.left
			});
		},

		_onScroll: function(event) {
			var scrollTop = window.pageYOffset;
			var header = this.elem('header');

			if(scrollTop > (this._offset.top) && scrollTop < (this._offset.top + this._geom.h - this._head.h)) {
				this.setMod(header, 'pos', 'fixed');
			}
			else {
				this.setMod(header, 'pos', 'rel');
			}
		}


	}));
});
