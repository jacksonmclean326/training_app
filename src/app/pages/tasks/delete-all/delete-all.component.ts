import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TRPC_CLIENT } from '../../../utils/trpc.client';
import { trpcResource } from '@fhss-web-team/frontend-utils';

@Component({
  selector: 'app-delete-all',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './delete-all.component.html',
  styleUrl: './delete-all.component.scss',
})
export class DeleteAllComponent {
  protected readonly trpc = inject(TRPC_CLIENT);
  protected readonly dialogRef = inject(MatDialogRef<DeleteAllComponent>);

  protected readonly deleteAll = trpcResource(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.trpc.tasks.deleteAll.mutate,
    () => {
      return null;
    }
  );

  protected cancel() {
    this.dialogRef.close('false');
  }

  protected async delete() {
    if (await this.deleteAll.refresh()) {
      this.dialogRef.close('true');
    }
  }
}
