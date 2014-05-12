




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>Plugins/integration/foundation/dataTables.foundation.js at master · DataTables/Plugins · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="DataTables/Plugins" name="twitter:title" /><meta content="Plugins - Plug-ins for DataTables" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/278219?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/278219?s=400" property="og:image" /><meta content="DataTables/Plugins" property="og:title" /><meta content="https://github.com/DataTables/Plugins" property="og:url" /><meta content="Plugins - Plug-ins for DataTables" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CCD26E78:2000:4F473EC:53707711" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="7wOuDxqpicCithCqzg3qhVBCRtMuwUrUHCqRjH5KrnrA7XObq3M7Xl6IHOjvbQRLTWOTGfPAqdjB1dJ/c1QWXA==" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-58e181c5cf58206dac2f13d435da7a71ca165593.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-1a3c410b868af7031a33d9c381adc57fbdd76b68.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="af289adfe90382cde7a519cebf42c9e8">

      
  <meta name="description" content="Plugins - Plug-ins for DataTables" />

  <meta content="278219" name="octolytics-dimension-user_id" /><meta content="DataTables" name="octolytics-dimension-user_login" /><meta content="4505588" name="octolytics-dimension-repository_id" /><meta content="DataTables/Plugins" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4505588" name="octolytics-dimension-repository_network_root_id" /><meta content="DataTables/Plugins" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/DataTables/Plugins/commits/master.atom" rel="alternate" title="Recent Commits to Plugins:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2FDataTables%2FPlugins%2Fblob%2Fmaster%2Fintegration%2Ffoundation%2FdataTables.foundation.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="DataTables/Plugins"
      data-branch="master"
      data-sha="ce61870bb86cc6ccdce8ec7bd2137f6df17e3957"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="DataTables/Plugins" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2FDataTables%2FPlugins"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/DataTables/Plugins/stargazers">
      188
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2FDataTables%2FPlugins"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/DataTables/Plugins/network" class="social-count">
        357
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/DataTables" class="url fn" itemprop="url" rel="author"><span itemprop="title">DataTables</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/DataTables/Plugins" class="js-current-repository js-repo-home-link">Plugins</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/DataTables/Plugins" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /DataTables/Plugins">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/DataTables/Plugins/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /DataTables/Plugins/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>10</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/DataTables/Plugins/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /DataTables/Plugins/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>4</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/DataTables/Plugins/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /DataTables/Plugins/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/DataTables/Plugins/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /DataTables/Plugins/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/DataTables/Plugins/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /DataTables/Plugins/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/DataTables/Plugins.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/DataTables/Plugins.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/DataTables/Plugins" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/DataTables/Plugins" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/DataTables/Plugins/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download DataTables/Plugins as a zip file"
                   title="Download DataTables/Plugins as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/DataTables/Plugins/blob/3118a2e3400c41d88f600fd9922a67c0dcecee03/integration/foundation/dataTables.foundation.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:a8d3e87033620b86d48a47ffc560fbc5 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/DataTables/Plugins/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DataTables/Plugins/blob/gh-pages/integration/foundation/dataTables.foundation.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DataTables/Plugins/blob/master/integration/foundation/dataTables.foundation.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DataTables/Plugins" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Plugins</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DataTables/Plugins/tree/master/integration" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">integration</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DataTables/Plugins/tree/master/integration/foundation" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">foundation</span></a></span><span class="separator"> / </span><strong class="final-path">dataTables.foundation.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="integration/foundation/dataTables.foundation.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Allan Jardine" class="main-avatar js-avatar" data-user="278219" height="24" src="https://avatars1.githubusercontent.com/u/278219?s=140" width="24" />
    <span class="author"><a href="/DataTables" rel="author">DataTables</a></span>
    <local-time datetime="2014-01-06T10:05:00Z" from="now" title-format="%Y-%m-%d %H:%M:%S %z" title="2014-01-06 10:05:00 +0000">January 06, 2014</local-time>
    <div class="commit-title">
        <a href="/DataTables/Plugins/commit/1f9595d4a9edbce23004d6a49aa38c6f654e2050" class="message" data-pjax="true" title="Fix #37 - Scrolling tables incorrectly had margin between the component
tables for Bootstrap and Foundation integration">Fix</a> <a href="https://github.com/DataTables/Plugins/issues/37" class="issue-link" title="bootstrap + sScrollY adds space between header and body">#37</a> <a href="/DataTables/Plugins/commit/1f9595d4a9edbce23004d6a49aa38c6f654e2050" class="message" data-pjax="true" title="Fix #37 - Scrolling tables incorrectly had margin between the component
tables for Bootstrap and Foundation integration">- Scrolling tables incorrectly had margin between the component</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="DataTables" href="/DataTables/Plugins/commits/master/integration/foundation/dataTables.foundation.js?author=DataTables"><img alt="Allan Jardine" class=" js-avatar" data-user="278219" height="20" src="https://avatars1.githubusercontent.com/u/278219?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="Billiam" href="/DataTables/Plugins/commits/master/integration/foundation/dataTables.foundation.js?author=Billiam"><img alt="Billiam" class=" js-avatar" data-user="242008" height="20" src="https://avatars1.githubusercontent.com/u/242008?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Allan Jardine" class=" js-avatar" data-user="278219" height="24" src="https://avatars1.githubusercontent.com/u/278219?s=140" width="24" />
            <a href="/DataTables">DataTables</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Billiam" class=" js-avatar" data-user="242008" height="24" src="https://avatars1.githubusercontent.com/u/242008?s=140" width="24" />
            <a href="/Billiam">Billiam</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>291 lines (255 sloc)</span>
          <span class="meta-divider"></span>
        <span>7.829 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/DataTables/Plugins/raw/master/integration/foundation/dataTables.foundation.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/DataTables/Plugins/blame/master/integration/foundation/dataTables.foundation.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/DataTables/Plugins/commits/master/integration/foundation/dataTables.foundation.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* Set the defaults for DataTables initialisation */</span></div><div class='line' id='LC2'><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC3'>	<span class="s2">&quot;sDom&quot;</span><span class="o">:</span></div><div class='line' id='LC4'>		<span class="s2">&quot;&lt;&#39;row&#39;&lt;&#39;small-6 columns&#39;l&gt;&lt;&#39;small-6 columns&#39;f&gt;r&gt;&quot;</span><span class="o">+</span></div><div class='line' id='LC5'>		<span class="s2">&quot;t&quot;</span><span class="o">+</span></div><div class='line' id='LC6'>		<span class="s2">&quot;&lt;&#39;row&#39;&lt;&#39;small-6 columns&#39;i&gt;&lt;&#39;small-6 columns&#39;p&gt;&gt;&quot;</span><span class="p">,</span></div><div class='line' id='LC7'>	<span class="s2">&quot;oLanguage&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC8'>		<span class="s2">&quot;sLengthMenu&quot;</span><span class="o">:</span> <span class="s2">&quot;_MENU_ records per page&quot;</span></div><div class='line' id='LC9'>	<span class="p">}</span></div><div class='line' id='LC10'><span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="c1">// In 1.10 we use the pagination renderers to draw the Bootstrap paging,</span></div><div class='line' id='LC15'><span class="c1">// rather than  custom plug-in</span></div><div class='line' id='LC16'><span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">Api</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC17'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">renderer</span> <span class="o">=</span> <span class="s1">&#39;foundation&#39;</span><span class="p">;</span></div><div class='line' id='LC18'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">ext</span><span class="p">.</span><span class="nx">renderer</span><span class="p">.</span><span class="nx">pageButton</span><span class="p">.</span><span class="nx">foundation</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">host</span><span class="p">,</span> <span class="nx">idx</span><span class="p">,</span> <span class="nx">buttons</span><span class="p">,</span> <span class="nx">page</span><span class="p">,</span> <span class="nx">pages</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC19'>		<span class="kd">var</span> <span class="nx">api</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">Api</span><span class="p">(</span> <span class="nx">settings</span> <span class="p">);</span></div><div class='line' id='LC20'>		<span class="kd">var</span> <span class="nx">classes</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">oClasses</span><span class="p">;</span></div><div class='line' id='LC21'>		<span class="kd">var</span> <span class="nx">lang</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">oLanguage</span><span class="p">.</span><span class="nx">oPaginate</span><span class="p">;</span></div><div class='line' id='LC22'>		<span class="kd">var</span> <span class="nx">btnDisplay</span><span class="p">,</span> <span class="nx">btnClass</span><span class="p">;</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>		<span class="kd">var</span> <span class="nx">attach</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">container</span><span class="p">,</span> <span class="nx">buttons</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>			<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">ien</span><span class="p">,</span> <span class="nx">node</span><span class="p">,</span> <span class="nx">button</span><span class="p">;</span></div><div class='line' id='LC26'>			<span class="kd">var</span> <span class="nx">clickHandler</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">e</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>				<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC28'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">action</span> <span class="o">!==</span> <span class="s1">&#39;ellipsis&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>					<span class="nx">api</span><span class="p">.</span><span class="nx">page</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">action</span> <span class="p">).</span><span class="nx">draw</span><span class="p">(</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC30'>				<span class="p">}</span></div><div class='line' id='LC31'>			<span class="p">};</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'>			<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="nx">ien</span><span class="o">=</span><span class="nx">buttons</span><span class="p">.</span><span class="nx">length</span> <span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">ien</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>				<span class="nx">button</span> <span class="o">=</span> <span class="nx">buttons</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">button</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC37'>					<span class="nx">attach</span><span class="p">(</span> <span class="nx">container</span><span class="p">,</span> <span class="nx">button</span> <span class="p">);</span></div><div class='line' id='LC38'>				<span class="p">}</span></div><div class='line' id='LC39'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC40'>					<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC41'>					<span class="nx">btnClass</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>					<span class="k">switch</span> <span class="p">(</span> <span class="nx">button</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>						<span class="k">case</span> <span class="s1">&#39;ellipsis&#39;</span><span class="o">:</span></div><div class='line' id='LC45'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="s1">&#39;&amp;hellip;&#39;</span><span class="p">;</span></div><div class='line' id='LC46'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="s1">&#39;unavailable&#39;</span><span class="p">;</span></div><div class='line' id='LC47'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>						<span class="k">case</span> <span class="s1">&#39;first&#39;</span><span class="o">:</span></div><div class='line' id='LC50'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sFirst</span><span class="p">;</span></div><div class='line' id='LC51'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span></div><div class='line' id='LC52'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC53'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>						<span class="k">case</span> <span class="s1">&#39;previous&#39;</span><span class="o">:</span></div><div class='line' id='LC56'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sPrevious</span><span class="p">;</span></div><div class='line' id='LC57'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span></div><div class='line' id='LC58'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC59'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>						<span class="k">case</span> <span class="s1">&#39;next&#39;</span><span class="o">:</span></div><div class='line' id='LC62'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sNext</span><span class="p">;</span></div><div class='line' id='LC63'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&lt;</span> <span class="nx">pages</span><span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC64'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC65'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>						<span class="k">case</span> <span class="s1">&#39;last&#39;</span><span class="o">:</span></div><div class='line' id='LC68'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sLast</span><span class="p">;</span></div><div class='line' id='LC69'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&lt;</span> <span class="nx">pages</span><span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC70'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC71'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>						<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC74'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC75'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">page</span> <span class="o">===</span> <span class="nx">button</span> <span class="o">?</span></div><div class='line' id='LC76'>								<span class="s1">&#39;current&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC77'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC78'>					<span class="p">}</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">btnDisplay</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'>						<span class="nx">node</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;li&gt;&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC82'>								<span class="s1">&#39;class&#39;</span><span class="o">:</span> <span class="nx">classes</span><span class="p">.</span><span class="nx">sPageButton</span><span class="o">+</span><span class="s1">&#39; &#39;</span><span class="o">+</span><span class="nx">btnClass</span><span class="p">,</span></div><div class='line' id='LC83'>								<span class="s1">&#39;aria-controls&#39;</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">sTableId</span><span class="p">,</span></div><div class='line' id='LC84'>								<span class="s1">&#39;tabindex&#39;</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">iTabIndex</span><span class="p">,</span></div><div class='line' id='LC85'>								<span class="s1">&#39;id&#39;</span><span class="o">:</span> <span class="nx">idx</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">button</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span> <span class="o">?</span></div><div class='line' id='LC86'>									<span class="nx">settings</span><span class="p">.</span><span class="nx">sTableId</span> <span class="o">+</span><span class="s1">&#39;_&#39;</span><span class="o">+</span> <span class="nx">button</span> <span class="o">:</span></div><div class='line' id='LC87'>									<span class="kc">null</span></div><div class='line' id='LC88'>							<span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC89'>							<span class="p">.</span><span class="nx">append</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;a&gt;&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC90'>									<span class="s1">&#39;href&#39;</span><span class="o">:</span> <span class="s1">&#39;#&#39;</span></div><div class='line' id='LC91'>								<span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC92'>								<span class="p">.</span><span class="nx">html</span><span class="p">(</span> <span class="nx">btnDisplay</span> <span class="p">)</span></div><div class='line' id='LC93'>							<span class="p">)</span></div><div class='line' id='LC94'>							<span class="p">.</span><span class="nx">appendTo</span><span class="p">(</span> <span class="nx">container</span> <span class="p">);</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>						<span class="nx">settings</span><span class="p">.</span><span class="nx">oApi</span><span class="p">.</span><span class="nx">_fnBindAction</span><span class="p">(</span></div><div class='line' id='LC97'>							<span class="nx">node</span><span class="p">,</span> <span class="p">{</span><span class="nx">action</span><span class="o">:</span> <span class="nx">button</span><span class="p">},</span> <span class="nx">clickHandler</span></div><div class='line' id='LC98'>						<span class="p">);</span></div><div class='line' id='LC99'>					<span class="p">}</span></div><div class='line' id='LC100'>				<span class="p">}</span></div><div class='line' id='LC101'>			<span class="p">}</span></div><div class='line' id='LC102'>		<span class="p">};</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>		<span class="nx">attach</span><span class="p">(</span></div><div class='line' id='LC105'>			<span class="nx">$</span><span class="p">(</span><span class="nx">host</span><span class="p">).</span><span class="nx">empty</span><span class="p">().</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&lt;ul class=&quot;pagination&quot;/&gt;&#39;</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">),</span></div><div class='line' id='LC106'>			<span class="nx">buttons</span></div><div class='line' id='LC107'>		<span class="p">);</span></div><div class='line' id='LC108'>	<span class="p">}</span></div><div class='line' id='LC109'><span class="p">}</span></div><div class='line' id='LC110'><span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC111'>	<span class="c1">// Integration for 1.9-</span></div><div class='line' id='LC112'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">sPaginationType</span> <span class="o">=</span> <span class="s1">&#39;foundation&#39;</span><span class="p">;</span></div><div class='line' id='LC113'><br/></div><div class='line' id='LC114'>	<span class="cm">/* API method to get paging information */</span></div><div class='line' id='LC115'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTableExt</span><span class="p">.</span><span class="nx">oApi</span><span class="p">.</span><span class="nx">fnPagingInfo</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">oSettings</span> <span class="p">)</span></div><div class='line' id='LC116'>	<span class="p">{</span></div><div class='line' id='LC117'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC118'>			<span class="s2">&quot;iStart&quot;</span><span class="o">:</span>         <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayStart</span><span class="p">,</span></div><div class='line' id='LC119'>			<span class="s2">&quot;iEnd&quot;</span><span class="o">:</span>           <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnDisplayEnd</span><span class="p">(),</span></div><div class='line' id='LC120'>			<span class="s2">&quot;iLength&quot;</span><span class="o">:</span>        <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span><span class="p">,</span></div><div class='line' id='LC121'>			<span class="s2">&quot;iTotal&quot;</span><span class="o">:</span>         <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnRecordsTotal</span><span class="p">(),</span></div><div class='line' id='LC122'>			<span class="s2">&quot;iFilteredTotal&quot;</span><span class="o">:</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnRecordsDisplay</span><span class="p">(),</span></div><div class='line' id='LC123'>			<span class="s2">&quot;iPage&quot;</span><span class="o">:</span>          <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC124'>				<span class="mi">0</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayStart</span> <span class="o">/</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="p">),</span></div><div class='line' id='LC125'>			<span class="s2">&quot;iTotalPages&quot;</span><span class="o">:</span>    <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC126'>				<span class="mi">0</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnRecordsDisplay</span><span class="p">()</span> <span class="o">/</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="p">)</span></div><div class='line' id='LC127'>		<span class="p">};</span></div><div class='line' id='LC128'>	<span class="p">};</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>	<span class="cm">/* Bootstrap style pagination control */</span></div><div class='line' id='LC132'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTableExt</span><span class="p">.</span><span class="nx">oPagination</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC133'>		<span class="s2">&quot;foundation&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC134'>			<span class="s2">&quot;fnInit&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">oSettings</span><span class="p">,</span> <span class="nx">nPaging</span><span class="p">,</span> <span class="nx">fnDraw</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC135'>				<span class="kd">var</span> <span class="nx">oLang</span> <span class="o">=</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">oLanguage</span><span class="p">.</span><span class="nx">oPaginate</span><span class="p">;</span></div><div class='line' id='LC136'>				<span class="kd">var</span> <span class="nx">fnClickHandler</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">e</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC137'>					<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC138'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">oApi</span><span class="p">.</span><span class="nx">_fnPageChange</span><span class="p">(</span><span class="nx">oSettings</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">action</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>						<span class="nx">fnDraw</span><span class="p">(</span> <span class="nx">oSettings</span> <span class="p">);</span></div><div class='line' id='LC140'>					<span class="p">}</span></div><div class='line' id='LC141'>				<span class="p">};</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>				<span class="nx">$</span><span class="p">(</span><span class="nx">nPaging</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span></div><div class='line' id='LC144'>					<span class="s1">&#39;&lt;ul class=&quot;pagination&quot;&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC145'>						<span class="s1">&#39;&lt;li class=&quot;prev arrow unavailable&quot;&gt;&lt;a href=&quot;&quot;&gt;&amp;laquo;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC146'>						<span class="s1">&#39;&lt;li class=&quot;next arrow unavailable&quot;&gt;&lt;a href=&quot;&quot;&gt;&amp;raquo;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC147'>					<span class="s1">&#39;&lt;/ul&gt;&#39;</span></div><div class='line' id='LC148'>				<span class="p">);</span></div><div class='line' id='LC149'>				<span class="kd">var</span> <span class="nx">els</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">nPaging</span><span class="p">);</span></div><div class='line' id='LC150'>				<span class="nx">$</span><span class="p">(</span><span class="nx">els</span><span class="p">[</span><span class="mi">0</span><span class="p">]).</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;click.DT&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">action</span><span class="o">:</span> <span class="s2">&quot;previous&quot;</span> <span class="p">},</span> <span class="nx">fnClickHandler</span> <span class="p">);</span></div><div class='line' id='LC151'>				<span class="nx">$</span><span class="p">(</span><span class="nx">els</span><span class="p">[</span><span class="mi">1</span><span class="p">]).</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;click.DT&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">action</span><span class="o">:</span> <span class="s2">&quot;next&quot;</span> <span class="p">},</span> <span class="nx">fnClickHandler</span> <span class="p">);</span></div><div class='line' id='LC152'>			<span class="p">},</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>			<span class="s2">&quot;fnUpdate&quot;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">oSettings</span><span class="p">,</span> <span class="nx">fnDraw</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>				<span class="kd">var</span> <span class="nx">iListLength</span> <span class="o">=</span> <span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC156'>				<span class="kd">var</span> <span class="nx">oPaging</span> <span class="o">=</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">oInstance</span><span class="p">.</span><span class="nx">fnPagingInfo</span><span class="p">();</span></div><div class='line' id='LC157'>				<span class="kd">var</span> <span class="nx">an</span> <span class="o">=</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">aanFeatures</span><span class="p">.</span><span class="nx">p</span><span class="p">;</span></div><div class='line' id='LC158'>				<span class="kd">var</span> <span class="nx">pages</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC159'>				<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">ien</span><span class="p">,</span> <span class="nx">klass</span><span class="p">,</span> <span class="nx">host</span><span class="p">;</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>				<span class="c1">// This could use some improving - however, see</span></div><div class='line' id='LC162'>				<span class="c1">// https://github.com/DataTables/DataTables/issues/163 - this will</span></div><div class='line' id='LC163'>				<span class="c1">// be changing in the near future, so not much point in doing too</span></div><div class='line' id='LC164'>				<span class="c1">// much just now</span></div><div class='line' id='LC165'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">&lt;=</span> <span class="mi">6</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>					<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span> <span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC167'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC168'>					<span class="p">}</span></div><div class='line' id='LC169'>				<span class="p">}</span></div><div class='line' id='LC170'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC171'>					<span class="c1">// Current page</span></div><div class='line' id='LC172'>					<span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="p">);</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'>					<span class="c1">// After current page</span></div><div class='line' id='LC175'>					<span class="kd">var</span> <span class="nx">pagesAfter</span> <span class="o">=</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">+</span> <span class="mi">2</span> <span class="o">&gt;=</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">?</span></div><div class='line' id='LC176'>						<span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">:</span></div><div class='line' id='LC177'>						<span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">+</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC178'>					<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span><span class="o">=</span><span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span><span class="o">+</span><span class="mi">1</span> <span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">pagesAfter</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC180'>					<span class="p">}</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>					<span class="c1">// After gap</span></div><div class='line' id='LC183'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">pagesAfter</span> <span class="o">&lt;</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">2</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC184'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></div><div class='line' id='LC185'>					<span class="p">}</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>					<span class="c1">// End</span></div><div class='line' id='LC188'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">2</span><span class="p">,</span> <span class="nx">pages</span> <span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">&lt;</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">2</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC189'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">2</span> <span class="p">);</span></div><div class='line' id='LC190'>					<span class="p">}</span></div><div class='line' id='LC191'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">pages</span> <span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC192'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC193'>					<span class="p">}</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>					<span class="c1">// Pages before</span></div><div class='line' id='LC196'>					<span class="kd">var</span> <span class="nx">pagesBefore</span> <span class="o">=</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">-</span> <span class="mi">2</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span></div><div class='line' id='LC197'>						<span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">-</span> <span class="mi">2</span> <span class="o">:</span></div><div class='line' id='LC198'>						<span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC199'>					<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span><span class="o">=</span><span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span><span class="o">-</span><span class="mi">1</span> <span class="p">;</span> <span class="nx">i</span><span class="o">&gt;</span><span class="nx">pagesBefore</span> <span class="p">;</span> <span class="nx">i</span><span class="o">--</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC200'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="nx">i</span> <span class="p">);</span></div><div class='line' id='LC201'>					<span class="p">}</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>					<span class="c1">// Before gap</span></div><div class='line' id='LC204'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">pagesBefore</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC205'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></div><div class='line' id='LC206'>					<span class="p">}</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>					<span class="c1">// Start</span></div><div class='line' id='LC209'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">pages</span> <span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="mi">1</span> <span class="p">);</span></div><div class='line' id='LC211'>					<span class="p">}</span></div><div class='line' id='LC212'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">inArray</span><span class="p">(</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">pages</span> <span class="p">)</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC213'>						<span class="nx">pages</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="mi">0</span> <span class="p">);</span></div><div class='line' id='LC214'>					<span class="p">}</span></div><div class='line' id='LC215'>				<span class="p">}</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>				<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="nx">ien</span><span class="o">=</span><span class="nx">an</span><span class="p">.</span><span class="nx">length</span> <span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">ien</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC218'>					<span class="c1">// Remove the middle elements</span></div><div class='line' id='LC219'>					<span class="nx">host</span> <span class="o">=</span> <span class="nx">an</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC220'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:gt(0)&#39;</span><span class="p">,</span> <span class="nx">host</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;:not(:last)&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'>					<span class="c1">// Add the new list items and their event handlers</span></div><div class='line' id='LC223'>					<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span> <span class="nx">pages</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">page</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC224'>						<span class="nx">klass</span> <span class="o">=</span> <span class="nx">page</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">?</span> <span class="s1">&#39;unavailable&#39;</span> <span class="o">:</span></div><div class='line' id='LC225'>							<span class="nx">page</span> <span class="o">===</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">?</span> <span class="s1">&#39;current&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC226'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;&#39;</span><span class="o">+</span><span class="nx">klass</span><span class="o">+</span><span class="s1">&#39;&quot;&gt;&lt;a href=&quot;&quot;&gt;&#39;</span><span class="o">+</span><span class="p">(</span><span class="nx">page</span><span class="o">===</span><span class="kc">null</span><span class="o">?</span> <span class="s1">&#39;&amp;hellip;&#39;</span> <span class="o">:</span> <span class="nx">page</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC227'>							<span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:last&#39;</span><span class="p">,</span> <span class="nx">host</span><span class="p">)</span> <span class="p">)</span></div><div class='line' id='LC228'>							<span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>								<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC230'>								<span class="kd">var</span> <span class="nx">pageNum</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">text</span><span class="p">(),</span><span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC231'>								<span class="k">if</span> <span class="p">(</span> <span class="o">!</span> <span class="nb">isNaN</span><span class="p">(</span><span class="nx">pageNum</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC232'>									<span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayStart</span> <span class="o">=</span> <span class="p">(</span><span class="nx">pageNum</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iLength</span><span class="p">;</span></div><div class='line' id='LC233'>									<span class="nx">fnDraw</span><span class="p">(</span> <span class="nx">oSettings</span> <span class="p">);</span></div><div class='line' id='LC234'>								<span class="p">}</span></div><div class='line' id='LC235'>							<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC236'>					<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>					<span class="c1">// Add / remove disabled classes from the static elements</span></div><div class='line' id='LC239'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:first&#39;</span><span class="p">,</span> <span class="nx">host</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC241'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC242'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:first&#39;</span><span class="p">,</span> <span class="nx">host</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC243'>					<span class="p">}</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">===</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">1</span> <span class="o">||</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC246'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:last&#39;</span><span class="p">,</span> <span class="nx">host</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC247'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC248'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:last&#39;</span><span class="p">,</span> <span class="nx">host</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;unavailable&#39;</span><span class="p">);</span></div><div class='line' id='LC249'>					<span class="p">}</span></div><div class='line' id='LC250'>				<span class="p">}</span></div><div class='line' id='LC251'>			<span class="p">}</span></div><div class='line' id='LC252'>		<span class="p">}</span></div><div class='line' id='LC253'>	<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC254'><span class="p">}</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'><span class="cm">/*</span></div><div class='line' id='LC258'><span class="cm"> * TableTools Foundation compatibility</span></div><div class='line' id='LC259'><span class="cm"> * Required TableTools 2.1+</span></div><div class='line' id='LC260'><span class="cm"> */</span></div><div class='line' id='LC261'><span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">DataTable</span><span class="p">.</span><span class="nx">TableTools</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'>	<span class="c1">// Set the classes that TableTools uses to something suitable for Foundation</span></div><div class='line' id='LC263'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">DataTable</span><span class="p">.</span><span class="nx">TableTools</span><span class="p">.</span><span class="nx">classes</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC264'>		<span class="s2">&quot;container&quot;</span><span class="o">:</span> <span class="s2">&quot;DTTT button-group&quot;</span><span class="p">,</span></div><div class='line' id='LC265'>		<span class="s2">&quot;buttons&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC266'>			<span class="s2">&quot;normal&quot;</span><span class="o">:</span> <span class="s2">&quot;button&quot;</span><span class="p">,</span></div><div class='line' id='LC267'>			<span class="s2">&quot;disabled&quot;</span><span class="o">:</span> <span class="s2">&quot;disabled&quot;</span></div><div class='line' id='LC268'>		<span class="p">},</span></div><div class='line' id='LC269'>		<span class="s2">&quot;collection&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC270'>			<span class="s2">&quot;container&quot;</span><span class="o">:</span> <span class="s2">&quot;DTTT_dropdown dropdown-menu&quot;</span><span class="p">,</span></div><div class='line' id='LC271'>			<span class="s2">&quot;buttons&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC272'>				<span class="s2">&quot;normal&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC273'>				<span class="s2">&quot;disabled&quot;</span><span class="o">:</span> <span class="s2">&quot;disabled&quot;</span></div><div class='line' id='LC274'>			<span class="p">}</span></div><div class='line' id='LC275'>		<span class="p">},</span></div><div class='line' id='LC276'>		<span class="s2">&quot;select&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC277'>			<span class="s2">&quot;row&quot;</span><span class="o">:</span> <span class="s2">&quot;active&quot;</span></div><div class='line' id='LC278'>		<span class="p">}</span></div><div class='line' id='LC279'>	<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'>	<span class="c1">// Have the collection use a bootstrap compatible dropdown</span></div><div class='line' id='LC282'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">DataTable</span><span class="p">.</span><span class="nx">TableTools</span><span class="p">.</span><span class="nx">DEFAULTS</span><span class="p">.</span><span class="nx">oTags</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC283'>		<span class="s2">&quot;collection&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC284'>			<span class="s2">&quot;container&quot;</span><span class="o">:</span> <span class="s2">&quot;ul&quot;</span><span class="p">,</span></div><div class='line' id='LC285'>			<span class="s2">&quot;button&quot;</span><span class="o">:</span> <span class="s2">&quot;li&quot;</span><span class="p">,</span></div><div class='line' id='LC286'>			<span class="s2">&quot;liner&quot;</span><span class="o">:</span> <span class="s2">&quot;a&quot;</span></div><div class='line' id='LC287'>		<span class="p">}</span></div><div class='line' id='LC288'>	<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC289'><span class="p">}</span></div><div class='line' id='LC290'><br/></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04020s from github-fe122-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-0761ba432b838d086e553e65a1be483eca0cba97.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-f390f4e30d55757f61e8f370d94b7c873ea74a7d.js" type="text/javascript"></script>
      
      
  </body>
</html>

