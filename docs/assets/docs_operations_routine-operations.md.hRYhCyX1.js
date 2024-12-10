import{_ as i,c as a,a9 as e,o as t}from"./chunks/framework.BjXht68r.js";const g=JSON.parse('{"title":"日常操作","description":"日常操作","frontmatter":{"title":"日常操作","description":"日常操作"},"headers":[],"relativePath":"docs/operations/routine-operations.md","filePath":"docs/operations/routine-operations.md"}'),l={name:"docs/operations/routine-operations.md"};function n(h,s,p,k,d,r){return t(),a("div",null,s[0]||(s[0]=[e(`<p>  FinClip 后端服务采用高性能的编程语言编写，通常情况下，我们在第一次部署之后便无需做太多变更。对于特定情况，我们可能需要考虑对系统进行维护，以下是一些日常操作的示例说明，以供参考。</p><h3 id="服务进程管理" tabindex="-1">服务进程管理 <a class="header-anchor" href="#服务进程管理" aria-label="Permalink to &quot;服务进程管理&quot;">​</a></h3><p>  FinClip 单机版本采用 docker 管理，集群版本采用 Kubernetes 进行管理，因此，我们采用 docker 或者 kubectl 客户端工具进行服务管理。</p><p><strong>1. 重启服务</strong></p><p>对于 docker 部署的版本：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contaienr-id</span></span></code></pre></div><p>对于 kubernetes 部署的版本：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> po</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> po</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pod-id</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#如果有指定命名空间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> po</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namespace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pod-id</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rollout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deployment</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --selector=tier=backend</span></span></code></pre></div><p><strong>2. 服务扩缩容</strong></p><p>对于Kubernetes部署的集群版本服务，可以对服务进行扩容，以提高QPS承载能力</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> scale</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --replicas=3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deployment/deployment-name</span></span></code></pre></div><h3 id="服务日志" tabindex="-1">服务日志 <a class="header-anchor" href="#服务日志" aria-label="Permalink to &quot;服务日志&quot;">​</a></h3><p>检查服务日志主要是通过查看容器的输出操作。</p><ul><li><p>docker 部署</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contaielr-id</span></span></code></pre></div></li><li><p>kubernetes部署</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tail=10086</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pod-id</span></span></code></pre></div></li></ul>`,14)]))}const c=i(l,[["render",n]]);export{g as __pageData,c as default};