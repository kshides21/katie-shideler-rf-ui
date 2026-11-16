import { useRef, useState } from 'react';
import personIcon from '../assets/Person.png';

const initialWorkflows = [
  {
    id: 'default-1',
    title: 'Attendee Registration',
    description: 'Start by creating a general registration workflow',
  },
  {
    id: 'default-2',
    title: 'Attendee Registration',
    description: 'Start by creating a general registration workflow',
  },
  {
    id: 'default-3',
    title: 'Attendee Registration',
    description: 'Start by creating a general registration workflow',
  },
];

const Attendees = () => {
  const [workflows, setWorkflows] = useState(initialWorkflows);
  const [isAddingWorkflow, setIsAddingWorkflow] = useState(false);
  const [workflowTitle, setWorkflowTitle] = useState('');
  const [workflowDescription, setWorkflowDescription] = useState('');
  const [workflowError, setWorkflowError] = useState('');
  const nextWorkflowId = useRef(1);

  const addWorkflow = (event) => {
    event.preventDefault();
    const title = workflowTitle.trim();
    const description = workflowDescription.trim();
    if (!title || !description) {
      setWorkflowError('Enter a workflow title and section.');
      return;
    }

    setWorkflows((currentWorkflows) => [
      ...currentWorkflows,
      {
        id: `added-${nextWorkflowId.current++}`,
        title,
        description,
        removable: true,
      },
    ]);
    setWorkflowTitle('');
    setWorkflowDescription('');
    setWorkflowError('');
    setIsAddingWorkflow(false);
  };

  const cancelAddWorkflow = () => {
    setWorkflowTitle('');
    setWorkflowDescription('');
    setWorkflowError('');
    setIsAddingWorkflow(false);
  };

  const removeWorkflow = (id) => {
    setWorkflows((currentWorkflows) =>
      currentWorkflows.filter((workflow) => workflow.id !== id),
    );
  };

  return (
    <section className="attendees-page" aria-labelledby="attendees-title">
      <header className="page-section-heading">
        <img src={personIcon} alt="" />
        <h2 id="attendees-title">Attendee</h2>
      </header>

      <section className="attendees-page__steps" aria-labelledby="attendee-step-1">
        <p className="attendees-page__step" id="attendee-step-1">
          <strong>Step 1:</strong> Base settings.
        </p>
        <div className="attendees-page__settings">
          <div className="attendees-page__setting">
            <strong>General</strong>
            <p>Define Attendee types &amp; attributes</p>
          </div>
          <div className="attendees-page__setting">
            <strong>Title</strong>
            <p>Description that explains the value goes here. Description that explains the value goes here.</p>
          </div>
          <div className="attendees-page__setting">
            <strong>Title</strong>
            <p>Description that explains the value goes here. Description that explains the value goes here.</p>
          </div>
        </div>
      </section>

      <section className="attendees-page__steps" aria-labelledby="attendee-step-2">
        <p className="attendees-page__step" id="attendee-step-2">
          <strong>Step 2:</strong> Build registration workflows.
        </p>
        <div className="attendees-page__grid">
          {workflows.map((workflow) => (
            <article className="attendees-page__card" key={workflow.id}>
              {workflow.removable && (
                <button
                  className="attendees-page__remove"
                  type="button"
                  aria-label={`Remove ${workflow.title}`}
                  onClick={() => removeWorkflow(workflow.id)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              )}
              <span className="attendees-page__workflow-icon" aria-hidden="true">↳</span>
              <div>
                <h3>{workflow.title}</h3>
                <p>{workflow.description}</p>
              </div>
            </article>
          ))}

          {isAddingWorkflow ? (
            <form className="attendees-page__add-form" onSubmit={addWorkflow}>
              <label>
                Workflow title
                <input
                  autoFocus
                  required
                  value={workflowTitle}
                  onChange={(event) => {
                    setWorkflowTitle(event.target.value);
                    setWorkflowError('');
                  }}
                  placeholder="Enter a title"
                />
              </label>
              <label>
                Workflow section
                <input
                  required
                  value={workflowDescription}
                  onChange={(event) => {
                    setWorkflowDescription(event.target.value);
                    setWorkflowError('');
                  }}
                  placeholder="Enter a section"
                />
              </label>
              {workflowError && (
                <p className="attendees-page__form-error" role="alert">
                  {workflowError}
                </p>
              )}
              <div className="attendees-page__form-actions">
                <button
                  className="attendees-page__cancel"
                  type="button"
                  onClick={cancelAddWorkflow}
                >
                  Cancel
                </button>
                <button className="attendees-page__add-submit" type="submit">
                  Add workflow
                </button>
              </div>
            </form>
          ) : (
            <button
              className="attendees-page__add-card"
              type="button"
              onClick={() => setIsAddingWorkflow(true)}
            >
              <span className="attendees-page__add-icon" aria-hidden="true">+</span>
              <span>Add Registration Workflow</span>
            </button>
          )}
        </div>
      </section>

      <section className="attendees-page__steps" aria-labelledby="attendee-step-3">
        <p className="attendees-page__step" id="attendee-step-3">
          <strong>Step 3:</strong> Design post-registration experiences.
        </p>
        <div className="attendees-page__grid attendees-page__grid--portal">
          <article className="attendees-page__card">
            <span className="attendees-page__portal-icon" aria-hidden="true" />
            <div>
              <h3>Attendee Portal</h3>
              <p>Manage the portal that attendees will see after they register for your event.</p>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Attendees;
