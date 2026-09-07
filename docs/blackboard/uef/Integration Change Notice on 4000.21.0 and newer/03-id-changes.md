---
title: "List of ID changes"
id: id-changes
sidebar_position: 3
edited: "2026-09-01"
---

The following tables corresponds to the IDs that changed/will be changed in the next release:

## Course-level (l1) pages

| Previous (4000.19.0 and prior)                    | Current (4000.21.0 and up)                           |
| ------------------------------------------------- | ---------------------------------------------------- |
| `course.outline`                                  | `course.l1.outline`                                  |
| `course.achievements`                             | `course.l1.achievements`                             |
| `course.analytics`                                | `course.l1.analytics`                                |
| `course.analytics.question-analysis`              | `course.l1.analytics.question-analysis`              |
| `course.analytics.course-activity`                | `course.l1.analytics.course-activity`                |
| `course.analytics.reports`                        | `course.l1.analytics.reports`                        |
| `course.analytics.scorm.reports`                  | `course.l1.analytics.scorm.reports`                  |
| `course.analytics.course-reports`                 | `course.l1.analytics.course-reports`                 |
| `course.announcements`                            | `course.l1.announcements`                            |
| `course.calendar`                                 | `course.l1.calendar`                                 |
| `course.classic`                                  | `course.l1.classic`                                  |
| `course.classic.outline`                          | `course.l1.classic.outline`                          |
| `course.classic.outline.ultra-course-self-enroll` | `course.l1.classic.outline.ultra-course-self-enroll` |
| `course.engagement`                               | `course.l1.engagement`                               |
| `course.grades`                                   | `course.l1.grades`                                   |
| `course.groups`                                   | `course.l1.groups`                                   |
| `course.groups-student`                           | `course.l1.groups-student`                           |
| `course.messages`                                 | `course.l1.messages`                                 |

## LTI launch routes

| Previous (4000.19.0 and prior) | Current (4000.21.0 and up) |
| ------------------------------ | -------------------------- |
| `lti.launch`                   | `course.lti-launch`        |
| `lti.launch-frame`             | `course.lti-launch-frame`  |
| `lti.launch-peek`              | `course.lti-launch-peek`   |

### LTI Tags unchanged

- `lti.launch-frame-system`
- `lti.launch-frame-embedded`
- `lti.launch-cloud-create`
- `content-manage.edit.lti`
- `content-manage.edit.placement`
- `cloud-document.edit`

## Assessment and Proctoring routes

| Previous (4000.19.0 and prior)                                          | Current (4000.21.0 and up)                                     |
| ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| `assessment.overview`                                                   | `course.assessment-l2.overview`                                |
| `assessment.external-overview`                                          | `course.assessment-l2.external-overview`                       |
| `assessment.overview.attempt`                                           | `course.assessment-l2.attempt.view`                            |
| `assessment.overview.attempt.review`                                    | `assessment.attempt.review`                                    |
| `assessment.overview.attempt.review.assessment-submission-feedback-tab` | `assessment.attempt.review.assessment-submission-feedback-tab` |
| `assessment.overview.attempt.review.inline-rubric`                      | `assessment.attempt.review.inline-rubric`                      |
| `assessment.overview.attempt.review.originality-tab`                    | `assessment.attempt.review.originality-tab`                    |
| `assessment.overview.multiple-attempt`                                  | `assessment.multiple-attempt`                                  |

## Other Course routes

| Area        | Previous (4000.19.0 and prior)            | Current (4000.21.0 and up)                                         |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------ |
| Discussions | `discussion`                              | `course.discussion`                                                |
| Discussions | `discussion.view-with.grading`            | `course.discussion.with-grading`                                   |
| Discussions | `discussion.view`                         | **REMOVED**                                                        |
| Journals    | `journal`                                 | `course.journal`                                                   |
| Journals    | `journal.view`                            | `course.journal.view`                                              |
| Journals    | `journal.view.with-participation`         | **REMOVED (with all its children)**                                |
| SCORM       | `scorm-overview`                          | `course.scorm-overview`                                            |
| SCORM       | `scorm-launch-frame`                      | `course.scorm-launch-frame`                                        |
| SCORM       | `scorm-overview.student`                  | `scorm-single-attempt`                                             |
| SCORM       | `scorm-overview.student.multiple-attempt` | `scorm-multiple-attempt`                                           |
| SCORM       | `scorm-overview.student.attempt`          | **REMOVED**                                                        |
| SCORM       | `gradebook-item.scorm-submissions`        | `course.gradebook-item-l2.gradebook-item-parent.scorm-submissions` |
| Gradebook   | `gradebook-item.assessment`               | `course.gradebook-item-l2.gradebook-item-parent.assessment`        |
| Content     | `content-manage.video`                    | `course.content-manage.create.video`                               |
| Content     | `content-navigator-transition-full`       | `course.content-navigator-transition-full`                         |
| Content     | `content-navigator-placeholder`           | `course.content-navigator-placeholder`                             |
| Files       | `preview-file`                            | `course.content-manage.edit.preview-file`                          |

## URL Path and Query parameters

| Route            | Previous (4000.19.0 and prior)                                                             | Current (4000.21.0 and up)                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| LTI Launch       | `/launch?courseId&contentId&linkRef&linkType&linkContentId`                                | `/lti/launch?contentId&linkRef&linkType&linkContentId`                                       |
| LTI launch frame | `/launchFrame?toolHref&toolTitle&contentId&linkContentId`                                  | `/lti/launchFrame?toolHref&toolTitle&contentId&linkContentId`                                |
| LTI launch peek  | `/launchPeek?toolHref&courseId&contentId`                                                  | `/lti/launchPeek?toolHref&contentId`                                                         |
| Document         | `/document/:id?courseId&view&state&linkContentId`                                          | `/document/:id?view&state&linkContentId`                                                     |
| SCORM overview   | `/scorm/overview/\{contentId\}?courseId&linkContentId`                                     | `/scorm/overview/\{contentId\}?linkContentId`                                                |
| Discussion       | `/\{contentId\}?courseId&parentId&position&positionBefore&positionAfter&selectedMessageId` | `/discussion/\{contentId\}?parentId&position&positionBefore&positionAfter&selectedMessageId` |
