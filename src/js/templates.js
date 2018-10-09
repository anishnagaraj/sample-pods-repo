export const cardTemplate = jenkinsResp => (
  jenkinsResp.reduce((cardHtml, jenkinsItem) => (
    `
      ${cardHtml}
      <div class="col s12 m4">
        <div class="card grey lighten-5">
          <div class="card-content">
            <h4 class="card-title">${jenkinsItem.serviceName} <span class="right">version: ${jenkinsItem.version}</span></h4>
            <div class="card-information row">
              <div class="col s5">
                <h6>JOBS: ${jenkinsItem.jobsCount}</h6>
              </div>
              <div class="col s7">
                <div class="pod-details">
                  <h6>PODS</h6>
                  <div class="pod-content">
                    <span>
                      <i class="small material-icons">check_circle</i>
                      ${jenkinsItem.runningPodsCount}
                    </span>
                    <span>
                      <i class="small material-icons">warning</i>
                      ${jenkinsItem.failedPodsCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  ), '')
);

export const tableTemplate = jenkinsResp => (
  jenkinsResp.reduce((cardHtml, jenkinsItem) => (
    `
      ${cardHtml}
      <tr>
        <td>${jenkinsItem.serviceName}</td>
        <td>${jenkinsItem.version}</td>
        <td>${jenkinsItem.jobsCount}</td>
        <td>${jenkinsItem.k8sNamespace}</td>
        <td>${jenkinsItem.runningPodsCount}</td>
        <td>${jenkinsItem.failedPodsCount}</td>
      </tr>
    `
  ), '')
);
