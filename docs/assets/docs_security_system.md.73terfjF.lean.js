import{_ as i,c as e,a9 as a,o as t}from"./chunks/framework.BjXht68r.js";const r=JSON.parse('{"title":"系统安全配置","description":"系统安全配置","frontmatter":{"title":"系统安全配置","description":"系统安全配置"},"headers":[],"relativePath":"docs/security/system.md","filePath":"docs/security/system.md"}'),l={name:"docs/security/system.md"};function n(p,s,o,d,h,c){return t(),e("div",null,s[0]||(s[0]=[a(`<p>  FinClip 采用容器打包分发，部署在 Linux 服务器中(当然，也支持 Windows)。对于 Linux 系统方面的安全配置，可以参考以下的一些建议：</p><h3 id="_1-系统更新与补丁" tabindex="-1"><strong>1. 系统更新与补丁</strong> <a class="header-anchor" href="#_1-系统更新与补丁" aria-label="Permalink to &quot;**1. 系统更新与补丁**&quot;">​</a></h3><ul><li><strong>及时更新系统</strong>：定期使用包管理器更新软件和内核，例如 <code>apt-get update &amp;&amp; apt-get upgrade</code> 或 <code>yum update</code>。</li><li><strong>自动更新</strong>：启用自动更新服务，例如 <code>unattended-upgrades</code>（Ubuntu）或 <code>dnf-automatic</code>（CentOS）。</li></ul><h3 id="_2-账户与访问控制" tabindex="-1"><strong>2. 账户与访问控制</strong> <a class="header-anchor" href="#_2-账户与访问控制" aria-label="Permalink to &quot;**2. 账户与访问控制**&quot;">​</a></h3><ul><li><p><strong>禁用默认账户</strong>：</p><ul><li><p>禁止直接以</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>root</span></span></code></pre></div><p>用户登录，编辑</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>/etc/ssh/sshd_config</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>PermitRootLogin no</span></span></code></pre></div></li><li><p>为日常操作创建非特权用户，并通过 <code>sudo</code> 提升权限。</p></li></ul></li><li><p><strong>强密码策略</strong>：</p><ul><li><p>使用复杂的密码，启用密码复杂性策略：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>/etc/security/pwquality.conf</span></span></code></pre></div></li><li><p>强制密码过期，使用 <code>chage</code> 工具。</p></li></ul></li><li><p><strong>限制登录尝试</strong>：</p><ul><li>配置 <code>pam_tally2</code> 或 <code>faillock</code> 来锁定多次失败登录的账户。</li></ul></li></ul><h3 id="_3-ssh-安全" tabindex="-1"><strong>3. SSH 安全</strong> <a class="header-anchor" href="#_3-ssh-安全" aria-label="Permalink to &quot;**3. SSH 安全**&quot;">​</a></h3><ul><li><p>修改默认端口</p><ul><li>将默认 SSH 端口从 <code>22</code> 改为非标准端口，例如 <code>2222</code>。</li></ul></li><li><p>启用密钥认证</p><ul><li><p>禁用密码登录，强制使用 SSH 公钥：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>PasswordAuthentication no</span></span></code></pre></div></li></ul></li><li><p>限制 IP 地址</p><ul><li>使用防火墙或 <code>/etc/hosts.allow</code> 和 <code>/etc/hosts.deny</code> 仅允许特定 IP 登录。</li></ul></li></ul><h3 id="_4-防火墙与网络配置" tabindex="-1"><strong>4. 防火墙与网络配置</strong> <a class="header-anchor" href="#_4-防火墙与网络配置" aria-label="Permalink to &quot;**4. 防火墙与网络配置**&quot;">​</a></h3><ul><li><p><strong>启用防火墙</strong>：</p><ul><li><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>ufw</span></span></code></pre></div><p>（Ubuntu）或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>firewalld</span></span></code></pre></div><p>（CentOS）管理规则，限制访问只开放必要的端口。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>ufw allow 22</span></span>
<span class="line"><span>ufw deny 3306</span></span></code></pre></div></li></ul></li><li><p><strong>关闭不必要的服务</strong>：</p><ul><li><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>systemctl</span></span></code></pre></div><p>或</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>chkconfig</span></span></code></pre></div><p>禁用未使用的服务：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>systemctl disable service_name</span></span></code></pre></div></li></ul></li><li><p><strong>防御端口扫描</strong>：</p><ul><li>配置 <code>iptables</code> 或使用 Fail2Ban 检测并阻止恶意访问。</li></ul></li></ul><h3 id="_5-文件与目录权限" tabindex="-1"><strong>5. 文件与目录权限</strong> <a class="header-anchor" href="#_5-文件与目录权限" aria-label="Permalink to &quot;**5. 文件与目录权限**&quot;">​</a></h3><ul><li><p><strong>最小权限原则</strong>：</p><ul><li><p>确保文件和目录权限不超过所需，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>chmod 700 /root</span></span>
<span class="line"><span>chmod 600 /etc/ssh/sshd_config</span></span></code></pre></div></li></ul></li><li><p><strong>限制关键文件访问</strong>：</p><ul><li>使用 ACL (<code>setfacl</code>) 对敏感文件进一步限制用户访问权限。</li></ul></li></ul><h3 id="_6-日志与审计" tabindex="-1"><strong>6. 日志与审计</strong> <a class="header-anchor" href="#_6-日志与审计" aria-label="Permalink to &quot;**6. 日志与审计**&quot;">​</a></h3><ul><li><p><strong>启用日志审计</strong>：</p><ul><li><p>配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>auditd</span></span></code></pre></div><p>监控关键操作，例如文件更改和账户管理：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span>auditctl -w /etc/passwd -p wa</span></span></code></pre></div></li></ul></li><li><p><strong>定期检查日志</strong>：</p><ul><li>分析 <code>/var/log</code> 中的系统日志，例如 <code>auth.log</code> 和 <code>syslog</code>。</li><li>使用日志管理工具，如 ELK 或 Loki</li></ul></li></ul><h3 id="_7-备份与恢复" tabindex="-1"><strong>7. 备份与恢复</strong> <a class="header-anchor" href="#_7-备份与恢复" aria-label="Permalink to &quot;**7. 备份与恢复**&quot;">​</a></h3><ul><li><p>定期备份</p><ul><li>使用工具如 <code>rsync</code> 或 <code>borg</code> 备份数据，并验证可恢复性。</li></ul></li><li><p>异地备份</p><ul><li>存储备份数据到远程服务器或云存储。</li></ul></li></ul>`,15)]))}const u=i(l,[["render",n]]);export{r as __pageData,u as default};
