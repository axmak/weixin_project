SET NAMES UTF8;
DROP DATABASE IF EXISTS bgy;
CREATE DATABASE bgy CHARSET=UTF8;
USE bgy;
CREATE TABLE bgy_nav(
  nid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nname VARCHAR(32)
);
INSERT INTO bgy_nav VALUES(null,'好吃推荐'),
(null,'西瓜蜜瓜'),
(null,'所有水果'),
(null,'榴莲山竹'),
(null,'佳沛奇异果'),
(null,'葡提浆果'),
(null,'现切水果'),
(null,'苹果蕉梨'),
(null,'桃李杏枣'),
(null,'芒橙柑柚'),
(null,'休闲水果'),
(null,'NFC果汁'),
(null,'节日礼盒'),
(null,'新客专区');



CREATE TABLE bgy_product(
  pid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  pname VARCHAR(32),
  pdetails VARCHAR(32),
  pimg VARCHAR(32),
  price VARCHAR(32),
  pdprice VARCHAR(32),
  fid INT
);
INSERT INTO bgy_product VALUES(null,'[86折]A级-麒麟瓜（大西瓜）很好吃的哦','半个/带皮2700-3000','sg.png','40.80','37.80',0);
INSERT INTO bgy_product VALUES(null,'A级-妃子笑荔枝(粒果)','1份/约500g','lz.png','14.60','13.80',0);
INSERT INTO bgy_product VALUES(null,'招牌-进口慕美人葡萄','1份/约500g','tz.png','39.90','37.90',0);
INSERT INTO bgy_product VALUES(null,'A级-冷鲜去皮甘蔗(袋装)','1份/约650g','gz.png','11.80','11.20',0);
INSERT INTO bgy_product VALUES(null,'B级进口火龙果（中）','1个/450-600g','hlg.png','22.80','21.20',0);
INSERT INTO bgy_product VALUES(null,'招牌-东方红苹果（中）','2个/350-450g','pg.png','14.80','13.20',0);
INSERT INTO bgy_product VALUES(null,'[买五赠一装]A级奇异果','1份6个[买五赠一]','qyg.png','58.80','56.20',0);



INSERT INTO bgy_product VALUES(null,'[86折]A级-麒麟瓜（大西瓜）','半个/带皮2700-3000','sg.png','40.80','37.80',0);

INSERT INTO bgy_product VALUES(null,'[86折]A级-麒麟瓜（大西瓜）很好吃的哦','半个/带皮2700-3000','sg.png','40.80','37.80',2);
INSERT INTO bgy_product VALUES(null,'A级-妃子笑荔枝(粒果)','1份/约500g','lz.png','14.60','13.80',2);

INSERT INTO bgy_product VALUES(null,'B级-山竹花（小山竹）','1份/400-500g','sz.png','45.80','41.80',3);

INSERT INTO bgy_product VALUES(null,'[买五赠一装]A级奇异果','1份6个[买五赠一]','qyg.png','58.80','56.20',4);

INSERT INTO bgy_product VALUES(null,'B级-125g盒装国产蓝莓','1盒/250g','lm.png','16.50','13.90',5);

INSERT INTO bgy_product VALUES(null,'[86折]A级-麒麟瓜（大西瓜）很好吃的哦','半个/带皮2700-3000','sg.png','40.80','37.80',6);

INSERT INTO bgy_product VALUES(null,'招牌-东方红苹果（中）','2个/350-450g','pg.png','14.80','13.20',7);



INSERT INTO bgy_product VALUES(null,'[现切]B级-沙漠哈密瓜','1盒/净果肉约350g','hmg.png','23.80','22.20',3);

INSERT INTO bgy_product VALUES(null,'A级-进口红李','1份/约350g','lizi.png','27.80','26.20',8);


INSERT INTO bgy_product VALUES(null,'[现切]B级-沙漠哈密瓜','1盒/净果肉约350g','hmg.png','23.80','22.20',6);
INSERT INTO bgy_product VALUES(null,'[86折]A级-麒麟瓜(大西瓜)','半个/带皮2700-3000','sg.png','40.80','37.80',6);

INSERT INTO bgy_product VALUES(null,'[猴果滋]鲜榨蓝莓草莓汁','1瓶/300ml','zgz.png','18.80','17.80',11);

INSERT INTO bgy_product VALUES(null,'[礼盒装]A级-荔枝礼盒','1盒/不少于3kg','lzg.png','139.80','138.80',12);

INSERT INTO bgy_product VALUES(null,'A级-柠檬王','1个/约150g','lmh.png','4.80','4.5',9);

INSERT INTO bgy_product VALUES(null,'[30包]干货猩球坚果','30包 仅剩2件','gg.png','138.80','130.50',10);


INSERT INTO bgy_product VALUES(null,'[现切]B级-沙漠哈密瓜','1盒/净果肉约350g','hmg.png','23.80','22.20',13);
INSERT INTO bgy_product VALUES(null,'[86折]A级-麒麟瓜(大西瓜)','半个/带皮2700-3000','sg.png','40.80','37.80',13);

INSERT INTO bgy_product VALUES(null,'[猴果滋]鲜榨蓝莓草莓汁','1瓶/300ml','zgz.png','18.80','17.80',13);

INSERT INTO bgy_product VALUES(null,'[礼盒装]A级-荔枝礼盒','1盒/不少于3kg','lzg.png','139.80','138.80',13);

INSERT INTO bgy_product VALUES(null,'[猴果滋]NFC鲜榨良枝苹果汁','1瓶/300ml','tgz.png','11.50','10.80',11);



CREATE TABLE bgy_to(
  tid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  tdetails VARCHAR(32),
  timg VARCHAR(32),
  price VARCHAR(32),
  nprice VARCHAR(32),
  tcount VARCHAR(32),
  sellcount INT
);

INSERT INTO bgy_to VALUES(null,'[95! 元/4斤]A级-泰国金枕榴莲(大)软糯香甜,“榴莲忘返”超重部分按拼团价补差价','20190518175924.png','95','107.60','一份4斤','5774');
INSERT INTO bgy_to VALUES(null,'新鲜尝鲜[19.9! 元/250g] B级-东魁杨梅,酸甜爆汁','20190518175728.png','19','21.60','1份约250g','6890');
INSERT INTO bgy_to VALUES(null,'[19.9! 元4袋] 干货猩球每日坚果25g','0190518175830.png','19','22.00','1份4袋','4783');


INSERT INTO bgy_to VALUES(null,'[25! 2个]A级-泰国椰青 (中) 入口清新~海风扑面','20190521083742.png','25','33.00','1份2个','7078');
INSERT INTO bgy_to VALUES(null,'[36.9! 元/3斤]A级-妃子笑荔枝(粒果)洗白莹润,甜而不腻','20190521083653.png','36','44.70','1份约3斤','7456');
INSERT INTO bgy_to VALUES(null,'新品上市[36.9! 元3/斤]A级-进口冰苹果(小)圆润饱满,多汁脆甜','20190521083714.png','36','50.70','1份约3斤','6848');
INSERT INTO bgy_to VALUES(null,'[66.9! 元/2斤]B级-樱桃(中)口感偏酸,地道樱桃味','20190521083335.png','69','79.80','1份约2斤','4376');


INSERT INTO bgy_to VALUES(null,'[35.9! 元6个]A级-佳沛阳光金奇异果(小)黄金果实,活力营养','20190521083604.png','35','47.40','1份6个','5763');