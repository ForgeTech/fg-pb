import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FgComponentBaseService } from '../fg-component-base/fg-component-base.service';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PowerBotEntity} from '../../entity/entity.export';
import { Observable, BehaviorSubject, Subject, merge } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FgComponentBaseEvent } from 'src/app/event/fg-events.export';
import { FormValidationStateEnum } from 'src/app/enum/enum.export';
/**
 * State of the apiKey-generation form
 */
enum ApiKeyModalStateEnum {
  NOT_GENERATED,
  SUCCESS,
  ERROR
}
/**
 * Modal-component for api-key generation
 */
@Component({
  selector: 'pb-modal-api-key',
  templateUrl: './modal-api-key.component.html',
  styleUrls: ['./modal-api-key.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalApiKeyComponent extends ModalComponent {
  /**
   * The Form containing input-elements
   * for setting market configuration
   */
  form: FormGroup;
  /**
   * Streams the disabled state of action-button
   */
  public actionDisabled$: Observable<boolean>;
  /**
   * Streams boolean-value for when apiKey was created successfully
   */
  public apiKeyGenerated$: Subject<string> = new BehaviorSubject(ApiKeyModalStateEnum[ApiKeyModalStateEnum.NOT_GENERATED]);
  /**
   * CONSTRUCTOR
   */
  constructor(
    /**
     * Pass preset-data to apiKey-Modal
     */
    @Inject(MAT_DIALOG_DATA) public data: PowerBotEntity,
    /**
     * Reference to the created modal
     */
    public modalRef: MatDialogRef<any>,
    /**
     * Reference to angular FormBuilder
     */
    public $fb: FormBuilder,
    /**
     * Reference to component-base-service
     * */
    $component: FgComponentBaseService
  ) {
    super(
      modalRef,
      data,
      $component
    );
    // Observable for after-view-init event
    const afterViewInit$ = this.event$.filter(event => event.signature === FgComponentBaseEvent.AFTER_CONTENT_INIT );
    // Compose observable for action-button disabled state
    this.actionDisabled$ = merge(
      afterViewInit$.pipe( map( event => this.form.status  ) ),
      afterViewInit$.pipe(
        switchMap( event => this.form.statusChanges )
      )
    ).pipe(
      map( ( status: string ) => status === FormValidationStateEnum[FormValidationStateEnum.VALID] ? true : false )
    );
  }
  /**
   * Request Api-Key
   */
  public action( $event: Event ) {
    // this.$component.$data.$auth.addApiKey()
  }

}
