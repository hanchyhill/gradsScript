'reinit'
'open F:\reanalysis\output\olr.filter(30t_90t)_-15-25_60-150.ctl'
'open F:\reanalysis\output\olr.filter(60t_80t)_-15-25_60-150.ctl'
'open F:\reanalysis\output\olr.filter(8t_17t)_-15-25_60-150.ctl'
'enable print F:\reanalysis\img\filter_filed\H_olr_imamge.gmf'
'set lon 110'
'set lat -10 25'
'set t 152 365'
*'set t 182 334'
'set xyrev on'
'set gxout shaded'
'd olr'
'run cbar'
'draw title olr filter(30d_90d) -10S 25N'
'print' 
'c'
'set t 152 365'
'set xyrev on'
'd olr.2'
'run cbar'
'draw title olr filter(60d_80d) -10S 25N'
'print' 
'c'
'set t 152 365'
'set xyrev on'
'd olr.3'
'run cbar'
'draw title olr filter(8d_17d) -10S 25N'
'print' 
'c'
'set lat 18'
'set lon 60 150'
'd olr'
'run cbar'
'draw title olr filter(30d_90d) -60E 150E'
'print' 
'c'
'd olr.2'
'run cbar'
'draw title olr filter(60d_80d) -60E 150E'
'print'
'c'
'd olr.3'
'run cbar'
'draw title olr filter(8d_17d) -60E 150E'
'print'
'disable print'
;
