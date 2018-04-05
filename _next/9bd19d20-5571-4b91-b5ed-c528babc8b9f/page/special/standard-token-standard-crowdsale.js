module.exports=__NEXT_REGISTER_PAGE("/special/standard-token-standard-crowdsale",function(){var e=webpackJsonp([3],{627:function(e,t,a){e.exports=a(628)},628:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=a(4);var r=a.n(n);var o=a(119);var l=a.n(o);var c=a(121);var s=a(143);var i=a(144);var u=a(15);var p=a.n(u);var d=a(80);var m=a(96);var f=a.n(m);var b=a(40);var h=a(142);var k=a(256);var v=a(145);var y=a(257);var w=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function S(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var N=function(e){S(t,e);function t(e){E(this,t);var a=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.state={tokenName:"",tokenSymbol:"",tokenDecimal:"",tokenSupply:"",price:""};a.updateTokenName=a.updateTokenName.bind(a);a.updateTokenSymbol=a.updateTokenSymbol.bind(a);a.updateTokenSupply=a.updateTokenSupply.bind(a);a.updateTokenDecimal=a.updateTokenDecimal.bind(a);a.updatePrice=a.updatePrice.bind(a);a.handleContractExecute=a.handleContractExecute.bind(a);return a}w(t,[{key:"handleContractExecute",value:function e(){try{var t=Number(this.state.tokenDecimal);var a=Number(this.state.tokenSupply);var n=Number(this.state.price);if(""===this.state.tokenName||""===this.state.tokenSymbol)throw new Error("All fields must be present");if(isNaN(a)||isNaN(a))throw new Error("Cannot convert string to number");if(n<1)throw new Error("Price must be greater than 1");if(!Number.isInteger(n))throw new Error("Price must be an integer");this.props.handleContractExecute({tokenName:this.state.tokenName,tokenSymbol:this.state.tokenSymbol,tokenDecimal:t,tokenSupply:a,price:n})}catch(e){alert(e)}}},{key:"updateTokenName",value:function e(t){this.setState({tokenName:t.target.value})}},{key:"updateTokenSymbol",value:function e(t){this.setState({tokenSymbol:t.target.value})}},{key:"updateTokenSupply",value:function e(t){this.setState({tokenSupply:t.target.value})}},{key:"updateTokenDecimal",value:function e(t){this.setState({tokenDecimal:t.target.value})}},{key:"updatePrice",value:function e(t){this.setState({price:t.target.value})}},{key:"render",value:function e(){var t=this.props,a=t.walletAddress,n=t.network;var o=this.state,l=o.tokenName,c=o.tokenSymbol,s=o.tokenDecimal,i=o.tokenSupply,u=o.price;return r.a.createElement("div",null,r.a.createElement("div",{className:"f1"},"Token & Crowdsale"),r.a.createElement("div",{className:"mb2"},r.a.createElement("div",null,"Network: ",n),r.a.createElement("div",null,"Wallet: ",a)),r.a.createElement("div",{className:"f4"},"Token Parameters:"),r.a.createElement("input",{className:"w-80 pa2 input-reset ba bg-transparent mb2",placeholder:"Token Name",onChange:this.updateTokenName,value:l}),r.a.createElement("input",{className:"w-80 pa2 input-reset ba bg-transparent mb2",placeholder:"Token Symbol",onChange:this.updateTokenSymbol,value:c}),r.a.createElement("input",{className:"w-80 pa2 input-reset ba bg-transparent mb2",placeholder:"Decimal Places",onChange:this.updateTokenDecimal,value:s}),r.a.createElement("input",{className:"w-80 pa2 input-reset ba bg-transparent mb2",placeholder:"Initial Supply",onChange:this.updateTokenSupply,value:i}),r.a.createElement("div",{className:"f4"},"Crowdsale Parameters:"),r.a.createElement("input",{className:"w-80 pa2 input-reset ba bg-transparent mb2",placeholder:"Price (token unit per wei)",onChange:this.updatePrice,value:u}),r.a.createElement("div",null,r.a.createElement("button",{className:"f5 ba link bw1 ph3 pv2 mb2 black bg-transparent b--black pointer",onClick:this.handleContractExecute},"Deploy Contracts")))}}]);return t}(n["Component"]);var T=N;var O=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,a,n){if(a)e(t.prototype,a);if(n)e(t,n);return t}}();function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"===typeof t||"function"===typeof t)?t:e}function j(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var A="STANDARD_TOKEN_STANDARD_CROWDSALE";var _=function(e){j(t,e);function t(e){C(this,t);var a=x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));a.renderStatusLayout=a.renderStatusLayout.bind(a);a.handleContractExecute=a.handleContractExecute.bind(a);a.renderMainLayout=a.renderMainLayout.bind(a);return a}O(t,[{key:"componentWillMount",value:function e(){this.props.loadWalletAddress()}},{key:"getContractAddress",value:function e(){return f.a.get(k["a"],this.props.networkIdVerbose+"."+A)}},{key:"handleContractExecute",value:function e(t){var a=t.tokenName,n=t.tokenSymbol,r=t.tokenDecimal,o=t.tokenSupply,l=t.price;this.props.contractExecute({factoryAddress:this.getContractAddress(),fromAddress:this.props.walletAddress,tokenName:a,tokenSymbol:n,tokenDecimal:r,tokenSupply:o,price:l})}},{key:"renderMainLayout",value:function e(){var t=r.a.createElement("div",null,r.a.createElement("p",null,"Hassle free deployment of both Token and Crowdsale contract."),r.a.createElement("p",null,"This contract deploys a standard ERC20 token and sends the tokens to a crowdsale contract where anyone can purchase the token from, at a fixed price."),r.a.createElement("p",null,"Ethers collected from the crowdsale will be transfer to the executing account automatically."));return r.a.createElement(v["a"],{title:"Standard Crowdsale & Token",content:t,actionText:"Deploy Token & Crowdsale",onAction:this.props.displayForm,error:!this.getContractAddress()})}},{key:"renderFormLayout",value:function e(){return r.a.createElement(T,{network:this.props.networkIdVerbose,walletAddress:this.props.walletAddress,handleContractExecute:this.handleContractExecute})}},{key:"renderStatusLayout",value:function e(){var t=this.props,a=t.txHash,n=t.tokenAddress,o=t.crowdsaleAddress,l=t.executing,c=t.executingError,s=t.executeParams,i=t.networkId;return r.a.createElement(y["a"],{networkId:i,executing:l,executingError:c,txHash:a,tokenAddress:n,crowdsaleAddress:o,executeParams:s})}},{key:"render",value:function e(){var t=this.props.display;var a=void 0;switch(t){case h["d"].MAIN:a=this.renderMainLayout();break;case h["d"].FORM:a=this.renderFormLayout();break;case h["d"].STATUS:a=this.renderStatusLayout();break;default:a=null}return r.a.createElement("div",{className:"w-80 h-100 pv6 v-mid center"},r.a.createElement("div",{className:"w-40-l dn dib-l fl pa5 center"},r.a.createElement("img",{className:"w-100",src:"/static/img/crowdsale.png"})),r.a.createElement("div",{className:"w-60-l fl ph4"},a))}}]);return t}(n["Component"]);var P=function e(t){return{walletAddress:Object(b["f"])(t),display:Object(h["f"])(t),networkId:Object(b["d"])(t),networkIdVerbose:Object(b["e"])(t),txHash:Object(h["k"])(t),tokenAddress:Object(h["j"])(t),crowdsaleAddress:Object(h["e"])(t),executing:Object(h["h"])(t),executingError:Object(h["i"])(t),executeParams:Object(h["g"])(t)}};var D=function e(t){return{displayForm:function e(){return t(Object(h["c"])())},loadWalletAddress:function e(a){return t(Object(b["g"])(a))},contractExecute:function e(a){return t(Object(h["a"])(a))}}};var L=Object(d["connect"])(P,D)(_);var I=a(146);var R=function e(){return r.a.createElement("div",{className:""},r.a.createElement(s["a"],null),r.a.createElement(i["a"],null),r.a.createElement(I["a"],null),r.a.createElement(L,null))};var M=t["default"]=l()(c["a"])(R)}},[627]);return{page:e.default}});