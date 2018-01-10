*
* 使用panels函数实现一页多图
*By 清风(mofangbao) from bbs.06climate.com
*如果提示没有panels.gsf文件，则可以去grads官方下载
*下载地址：ftp://grads.iges.org/grads/scripts/panels.gsf
*下载后请放置于lib目录，如果是opengrads则可以到下面这个链接查看对应的目录
* http://bbs.06climate.com/forum.php?mod=viewthread&tid=2771
*
'reinit'
rc = gsfallow("on")
nrows=2
ncols=2
args=nrows%' '%ncols
'sdfopen E:\program\ncep\skt.sfc.mon.mean.nc'
*取消经纬比例自动调整
'set mproj scaled'
panels(args)
*p 表示当前所在的虚页是第几个虚页
p = 1
*ptot表示总共的虚页数量
ptot = nrows * ncols
*按panel循环并画图
while (p <= ptot)
*设置第p个虚页 
    _vpg.p
    'set parea 1 9.8 1 7.5'
   'set t 'p
   'set grads off'
   'set gxout shaded'
   'set font 2'
   'set  xlopts 1 4 0.2';'set  ylopts 1 4 0.2'  
   'd skt'
   'set font 0'
   'cbar_interp 1 1 1'
   'zb 30 30 0.1'
    'set font 5';'set strsiz 0.3 0.3'
   'draw string 3.5 8 skt(t='p',panel='p')' 
   p = p + 1
endwhile
  'set vpage off'
'printim e:\program\ncep\skt.png png white x800 y600'
;