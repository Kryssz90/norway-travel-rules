(this.webpackJsonptravelrules=this.webpackJsonptravelrules||[]).push([[0],{79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),i=n.n(c),s=n(5),o=n(12),l=n(31),j=n(33),d=n(2),u=function(e){var t=e.children;return Object(d.jsx)(l.a,{boxShadow:"md",maxW:"lg",width:"100%",borderWidth:"1px",borderRadius:"lg",borderColor:"gray.700",overflow:"hidden",padding:"5px",textAlign:"justify",background:"rgba(255,255,255,0.08)",marginBottom:4,children:Object(d.jsx)(l.b,{children:t})})},b=function(e){var t=e.href,n=e.text;return Object(d.jsx)(l.g,{rel:"noopener nofollow",target:"_blank",color:"teal.500",href:t,children:n})},h=n.p+"static/media/mano-logo.9f2746df.png",O=function(e){var t=e.setStarted;return Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{children:[Object(d.jsxs)(l.j,{textAlign:"justify",marginBottom:3,children:["Ez a k\xe9rd\u0151\xedv az\xe9rt k\xe9sz\xfclt, hogy seg\xedtsen eligazodni a norv\xe9g utaz\xe1si szab\xe1lyokban. Felh\xedvjuk a figyelmet, hogy a hivatalos inform\xe1ci\xf3k norv\xe9g \xe9s angol nyelven a korm\xe1ny, a"," ",Object(d.jsx)(b,{href:"https://www.helsenorge.no/",text:"Helse Norge"})," \xe9s az ",Object(d.jsx)(b,{href:"https://www.fhi.no/",text:"FHI"})," oldal\xe1n olvashat\xf3ak. Specifikus k\xe9rd\xe9s eset\xe9n h\xedvj\xe1k a hivatalos koronav\xedrus inform\xe1ci\xf3s vonalat:"," ",Object(d.jsx)(b,{href:"tel:+4781555015",text:"+47 815 55 015"})," "]}),Object(d.jsx)(l.b,{children:Object(d.jsx)("img",{src:h,width:"50%",alt:"Magyar-Norv\xe9g f\xf3rum logo"})}),Object(d.jsx)(l.b,{children:Object(d.jsx)(l.j,{marginBottom:3,children:Object(d.jsx)(b,{href:"https://www.facebook.com/groups/838282506317284",text:"Magyar-Norv\xe9g F\xf3rum"})})}),Object(d.jsxs)(l.j,{marginBottom:3,children:["\xd6ssze\xe1ll\xedtotta:"," ",Object(d.jsx)(b,{href:"https://www.linkedin.com/in/krisztian-zsobrak/",text:"Zsobr\xe1k Kriszti\xe1n"})]}),Object(d.jsx)(l.b,{children:Object(d.jsx)(j.a,{colorScheme:"green",onClick:function(){t(!0)},children:"Kit\xf6lt\xe9s"})})]})})},g=["16 alatt","16-18 k\xf6z\xf6tt","18 vagy id\u0151sebb"],x=[{text:"Z\xf6ld",color:"green"},{text:"Narancss\xe1rga",color:"orange"},{text:"V\xf6r\xf6s",color:"red"},{text:"S\xf6t\xe9tv\xf6r\xf6s",color:"red"}],m={age:void 0,sourceCountry:void 0,approvedVaccinated:void 0,wasunderwent:void 0,gotVaccine:void 0},v=[{id:"pfizer",manufacturer:"Pfizer-BioNTech",name:"Pfizer Comirnaty",score:1},{id:"moderna",manufacturer:"ModernaTX, Inc",name:"Moderna",score:1},{id:"astra",manufacturer:"Astra Zeneca",name:"Vaxzevria",score:1},{id:"janssen",manufacturer:"Janssen Pharmaceuticals",name:"Johnson & Johnson",score:2},{id:"sputnik",manufacturer:"Gamaleja Kutat\xf3k\xf6zpont",name:"Szputnyik V",score:0},{id:"sinopharm",manufacturer:"Sinopharm",name:"Sinopharm",score:0}],f=function(e){var t=e.setAge;return Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{children:[Object(d.jsx)(l.f,{fontSize:25,children:"H\xe1ny \xe9ves \xd6n?"}),g.map((function(e,n){return Object(d.jsx)(j.a,{colorScheme:"green",onClick:function(){t(n)},children:e})}))]})})},p=function(e){var t=e.setGotVaccine;return Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{children:[Object(d.jsx)(l.f,{fontSize:25,children:"Kapott-e \xf6n valamilyen COVID-19 elleni vakcin\xe1t?"}),Object(d.jsx)(j.a,{colorScheme:"green",onClick:function(){t(!0)},children:"Igen"}),Object(d.jsx)(j.a,{colorScheme:"green",onClick:function(){t(!1)},children:"Nem"})]})})},z=function(e){var t=e.setWasunderwent,n=new Date;return n.setDate(n.getDate()-180),Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{children:[Object(d.jsx)(l.f,{fontSize:25,children:"Az elm\xfalt 180 napban \xe1tesett-e a COVID-19 betegs\xe9gen dokument\xe1lhat\xf3 (laborat\xf3riumi teszttel igazolva) m\xf3don?"}),Object(d.jsxs)(l.j,{children:["A 180 nappal ezel\u0151tti d\xe1tum: ",n.toLocaleDateString("hu-hu")]}),Object(d.jsx)(j.a,{colorScheme:"green",onClick:function(){t(!0)},children:"Igen"}),Object(d.jsx)(j.a,{colorScheme:"green",onClick:function(){t(!1)},children:"Nem"})]})})},k=function(e){var t=e.setSourceCountry;return Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{children:[Object(d.jsx)(l.f,{fontSize:25,children:"Milyen sz\xedn-besorol\xe1s\xfa orsz\xe1gb\xf3l \xe9rkezik?"}),x.map((function(e,n){return Object(d.jsx)(j.a,{colorScheme:e.color,onClick:function(){t(n)},children:e.text})}))]})})},y=n(19),w=function(e){var t=e.name,n=e.manufacturer,r=e.count,a=e.setCount;return Object(d.jsxs)(l.e,{gap:5,border:"1px",borderRadius:10,borderColor:"teal.100",textAlign:"left",children:[Object(d.jsx)(l.a,{w:"100%",h:"100%",margin:2,justifyContent:"center",alignContent:"center",children:Object(d.jsxs)(l.j,{children:[Object(d.jsx)("strong",{children:t})," ",Object(d.jsx)("br",{}),Object(d.jsx)("small",{children:n})]})}),Object(d.jsx)(l.d,{w:"40%",h:"100%",margin:2,justifyContent:"center",alignContent:"center",children:r>0?Object(d.jsxs)(d.Fragment,{children:[r," d\xf3zis"]}):Object(d.jsx)(d.Fragment,{children:"-"})}),Object(d.jsxs)(l.a,{w:"80%",h:"100%",margin:2,justifyContent:"center",alignContent:"center",children:[Object(d.jsx)(j.a,{colorScheme:"green",margin:2,onClick:function(){a(1)},children:"+"}),Object(d.jsx)(j.a,{colorScheme:"orange",margin:2,onClick:function(){a(-1)},children:"-"})]})]})},C=function(e){var t=e.setApprovedVaccinated,n=Object(r.useState)(v.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{count:0})}))),a=Object(o.a)(n,2),c=a[0],i=a[1],s=function(){var e=c.reduce((function(e,t){return e+t.score*t.count}),0);t(e>=2)};return Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{children:[Object(d.jsx)(l.f,{fontSize:25,children:"Milyen t\xedpus\xfa vakcin\xe1t kapott?"}),",",c.map((function(e){return Object(d.jsx)(w,{manufacturer:e.manufacturer,name:e.name,count:e.count,setCount:function(t){!function(e,t){i(c.map((function(n){return n.id===e?Object(y.a)(Object(y.a)({},n),{},{count:(r=n.count+t,a=5,c=0,r<c?c:r>a?a:r)}):n;var r,a,c})))}(e.id,t)}},e.id)})),c.reduce((function(e,t){return e+t.count}),0)>0&&Object(d.jsx)(j.a,{colorScheme:"green",size:"xl",onClick:function(){s()},children:Object(d.jsxs)(l.i,{children:[" ",Object(d.jsx)("div",{children:"Folytat\xe1s:"}),c.map((function(e){return e.count>0?Object(d.jsxs)("div",{children:[e.count," d\xf3zis ",e.name]},e.id):null}))]})})]})})},A=function(e){var t=e.measures,n=t.preRegistration,r=t.testOnArrival,a=t.testBeforeArrival,c=t.quarantine,i=t.testOnDay3;return Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{children:[c?Object(d.jsx)(l.f,{color:"red",children:"Karant\xe9n sz\xfcks\xe9ges"}):Object(d.jsx)(l.f,{color:"green",children:"Nincs karant\xe9n"}),Object(d.jsx)(l.j,{children:Object(d.jsxs)(l.k,{children:[n&&Object(d.jsxs)(l.h,{children:["Online regisztr\xe1ci\xf3 a"," ",Object(d.jsx)(b,{href:"https://reg.entrynorway.no",text:"reg.entrynorway.no"})," ","oldalon, leghamarabb 72 \xf3r\xe1val, legk\xe9s\u0151bb pedig 2 \xf3r\xe1val a beutaz\xe1s el\u0151tt."]}),a&&Object(d.jsx)(l.h,{children:"Beutaz\xe1s el\u0151tt k\xf6telez\u0151 egy 24 \xf3r\xe1n\xe1l nem r\xe9gebbi antig\xe9n gyorsteszt vagy PCR teszt. A mintav\xe9tel ideje sz\xe1m\xedt."}),r&&Object(d.jsx)(l.h,{children:"Hat\xe1rbel\xe9p\xe9skor k\xf6telez\u0151 antig\xe9n gyorstesztet v\xe9gezni, melynek az eredm\xe9ny\xe9t meg kell v\xe1rni. Ha nincsen teszt\xe1llom\xe1s, nem \xfczemel, vagy a hat\xf3s\xe1gok m\xe1sk\xe9nt rendelkeznek, akkor 24 \xf3r\xe1n bel\xfcl kell antig\xe9n vagy PCR tesztet csin\xe1ltatni. Amennyiben a gyorsteszt eredm\xe9nye pozit\xedv, \xfagy 24 \xf3r\xe1n bel\xfcl k\xf6telez\u0151 PCR tesztet csin\xe1ltatni."}),"recommended"===i&&Object(d.jsx)(l.h,{children:"Nincs karant\xe9n, azonban a 3. napon aj\xe1nlott tesztelni."})]})}),c&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.f,{as:"h3",children:"Karant\xe9n:"}),Object(d.jsx)(l.j,{children:Object(d.jsxs)(l.k,{children:[Object(d.jsx)(l.h,{children:"10 nap otthoni karant\xe9n."}),Object(d.jsx)(l.h,{children:"A beutaz\xe1st k\xf6vet\u0151 3. napon lehet\u0151s\xe9g van egy PCR teszt elv\xe9gz\xe9s\xe9re, melynek negat\xedv eredm\xe9ny\xe9vel v\xe9get \xe9rhet a karant\xe9n."}),Object(d.jsx)(l.h,{children:"A beutaz\xe1s napja a 0. nap, az eredm\xe9ny pedig a teszt elv\xe9gz\xe9se ut\xe1n 24-72 \xf3r\xe1n bel\xfcl van meg."})]})})]})]})})},S=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(m.age),i=Object(o.a)(c,2),s=i[0],b=i[1],h=Object(r.useState)(m.sourceCountry),v=Object(o.a)(h,2),y=v[0],w=v[1],S=Object(r.useState)(m.gotVaccine),B=Object(o.a)(S,2),D=B[0],R=B[1],V=Object(r.useState)(m.approvedVaccinated),N=Object(o.a)(V,2),I=N[0],F=N[1],q=Object(r.useState)(m.wasunderwent),K=Object(o.a)(q,2),P=K[0],M=K[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.c,{maxW:"xl",centerContent:!0,children:[Object(d.jsx)(l.f,{fontSize:36,marginBottom:6,textAlign:"center",children:"Beutaz\xe1si szab\xe1lyok Norv\xe9gi\xe1ba"}),void 0!==s&&Object(d.jsx)(u,{children:Object(d.jsxs)(l.i,{width:"xl",children:[void 0!==s&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Kor:"}),Object(d.jsx)("br",{}),g[s]]}),void 0!==D&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Kapott COVID-19 olt\xe1st:"}),Object(d.jsx)("br",{})," ",D?"Igen":"Nem"," "]}),void 0!==I&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Norv\xe9gia \xe1ltal elfogadott olt\xe1st kapott:"})," ",Object(d.jsx)("br",{})," ",I?"Igen":"Nem"," "]}),void 0!==P&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"\xc1tesett a COVID-19 betegs\xe9gben az elm\xfalt 180 napban:"}),Object(d.jsx)("br",{})," ",P?"Igen":"Nem"," "]}),void 0!==y&&Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"Kiindul\xe1si orsz\xe1g:"}),Object(d.jsx)("br",{})," ",x[y].text," "]})]})}),function(){var e=function(){var e=D&&I;switch(s){case 0:switch(e){case!0:return{preRegistration:!1,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"no"};case!1:switch(P){case!0:return{preRegistration:!1,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"no"};case!1:return{preRegistration:!1,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"recommended"};default:return}default:return}case 1:switch(e){case!0:return{preRegistration:!0,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"no"};case!1:switch(P){case!0:return{preRegistration:!0,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"no"};case!1:return{preRegistration:!0,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"recommended"};default:return}default:return}case 2:switch(e){case!0:return{preRegistration:!0,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"no"};case!1:switch(P){case!0:return{preRegistration:!0,testOnArrival:!0,testBeforeArrival:!1,quarantine:!1,testOnDay3:"no"};case!1:switch(y){case 0:case 1:return{preRegistration:!0,testOnArrival:!0,testBeforeArrival:!0,quarantine:!1,testOnDay3:"no"};case 2:case 3:return{preRegistration:!0,testOnArrival:!0,testBeforeArrival:!0,quarantine:!0,testOnDay3:"endquarantine"};default:return}default:return}default:return}default:return}}();return e?Object(d.jsx)(A,{measures:e}):n?void 0===s?Object(d.jsx)(f,{setAge:b}):void 0===D?Object(d.jsx)(p,{setGotVaccine:R}):!0===D&&void 0===I?Object(d.jsx)(C,{setApprovedVaccinated:F}):void 0===P?Object(d.jsx)(z,{setWasunderwent:M}):void 0===y?Object(d.jsx)(k,{setSourceCountry:w}):Object(d.jsx)(d.Fragment,{children:"Invalid state"}):Object(d.jsx)(O,{setStarted:a})}(),Object(d.jsx)(j.a,{colorScheme:"gray",size:"sm",marginTop:"15px",textColor:"black",onClick:function(){a(!1),b(m.age),w(m.sourceCountry),R(void 0),F(m.approvedVaccinated),M(m.wasunderwent)},children:"\xdajrakezd\xe9s"}),"Friss\xedtve: 2021. 12. 09."]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(S,{})})}),document.getElementById("travel-rules-root")),B()}},[[79,1,2]]]);
//# sourceMappingURL=main.5a0ca321.chunk.js.map